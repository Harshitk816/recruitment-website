"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiArrowRight, FiHeadphones } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

// ─── Types ────────────────────────────────────────────────────────────────────

type Intent = "hiring" | "jobseeker" | null;

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
  isError?: boolean;
}

interface LeadData {
  intent: Intent;
  name: string;
  email: string;
  phone: string;
  requirement: string;
  submittedAt: string;
}

type Step = "intent" | "name" | "email" | "phone" | "requirement" | "done";

// ─── Validation ───────────────────────────────────────────────────────────────

const validators: Partial<Record<Step, (val: string) => string | null>> = {
  name: (val) => {
    if (val.length < 2) return "Please enter your full name (at least 2 characters).";
    if (!/^[a-zA-Z\s'.'-]+$/.test(val)) return "Name should only contain letters and spaces.";
    return null;
  },
  email: (val) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
      return "Please enter a valid email address (e.g. you@example.com).";
    return null;
  },
  phone: (val) => {
    // Allow explicit skip
    if (val.trim().toLowerCase() === "skip") return null;
    const digits = val.replace(/\D/g, "");
    if (digits.length !== 10) return "Please enter a valid 10-digit phone number.";
    if (!/^[6-9]/.test(digits)) return "Indian mobile numbers must start with 6, 7, 8, or 9.";
    return null;
  },
  requirement: (val) => {
    if (val.trim().length < 10)
      return "Please give us a bit more detail (at least 10 characters).";
    return null;
  },
};

// ─── Storage ──────────────────────────────────────────────────────────────────

const saveLead = (lead: LeadData) => {
  try {
    const existing = JSON.parse(
      sessionStorage.getItem("workeraa_leads") || "[]"
    );
    existing.push(lead);
    sessionStorage.setItem("workeraa_leads", JSON.stringify(existing));
    // TODO: POST to /api/leads when backend is ready
    console.log("[Workeraa Lead Captured]", lead);
  } catch (e) {
    console.error("Failed to save lead", e);
  }
};

// ─── Bot prompts ──────────────────────────────────────────────────────────────

const PROMPTS: Record<Step, string> = {
  intent:      "Hi there! 👋 Welcome to Workeraa. Are you looking to **hire talent** or **find a job**?",
  name:        "Great! What's your name?",
  email:       "Nice to meet you, {name}! What's your email address?",
  phone:       "Got it! What's your 10-digit phone number? (type **skip** to skip)",
  requirement: "Almost done! Briefly describe your requirement — the role, industry, or anything we should know.",
  done:        "Thanks {name}! 🎉 Our team will reach out shortly. You can also connect with us directly on WhatsApp right now.",
};

const resolve = (s: Step, data: Partial<LeadData>) =>
  PROMPTS[s].replace("{name}", data.name || "");

// ─── Widget ───────────────────────────────────────────────────────────────────

export const SupportWidget: React.FC<{ phoneNumber?: string }> = ({
  phoneNumber = "918700192565",
}) => {
  const [isOpen, setIsOpen]               = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages]           = useState<Message[]>([]);
  const [step, setStep]                   = useState<Step>("intent");
  const [input, setInput]                 = useState("");
  const [isTyping, setIsTyping]           = useState(false);
  const [retryCount, setRetryCount]       = useState(0);
  const [lead, setLead]                   = useState<Partial<LeadData>>({});
  const [shake, setShake]                 = useState(false);
  const messagesEndRef                    = useRef<HTMLDivElement>(null);
  const inputRef                          = useRef<HTMLInputElement>(null);

  // Auto-open after 5s, once
  useEffect(() => {
    if (hasAutoOpened) return;
    const t = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 5000);
    return () => clearTimeout(t);
  }, [hasAutoOpened]);

  // Greet on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) botSay(PROMPTS.intent);
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when step changes
  useEffect(() => {
    if (step !== "intent" && step !== "done") inputRef.current?.focus();
  }, [step]);

  const botSay = (text: string, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((p) => [...p, { id: crypto.randomUUID(), from: "bot", text }]);
    }, delay);
  };

  const botError = (text: string) => {
    triggerShake();
    setMessages((p) => [
      ...p,
      { id: crypto.randomUUID(), from: "bot", text, isError: true },
    ]);
  };

  const userSay = (text: string) =>
    setMessages((p) => [...p, { id: crypto.randomUUID(), from: "user", text }]);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  // ── Intent selection ──
  const handleIntent = (intent: Intent) => {
    userSay(intent === "hiring" ? "🏢 I want to hire talent" : "💼 I'm looking for a job");
    const updated = { ...lead, intent };
    setLead(updated);
    setRetryCount(0);
    setStep("name");
    botSay(resolve("name", updated));
  };

  // ── Submit text input ──
  const handleSubmit = () => {
    const value = input.trim();
    if (!value) return;

    const validate = validators[step];
    if (validate) {
      const error = validate(value);
      if (error) {
        userSay(value);
        setInput("");
        const newRetry = retryCount + 1;
        setRetryCount(newRetry);
        // Show skip hint after 2 failures on phone step
        if (newRetry >= 2 && step === "phone") {
          botError(`${error}\n\nTip: You can type **skip** to continue without a phone number.`);
        } else {
          botError(error);
        }
        return;
      }
    }

    userSay(value);
    setInput("");
    setRetryCount(0);
    advance(value);
  };

  const advance = (value: string) => {
    const updated = { ...lead };

    switch (step) {
      case "name":
        updated.name = value.replace(/\b\w/g, (c) => c.toUpperCase());
        setLead(updated);
        setStep("email");
        botSay(resolve("email", updated));
        break;

      case "email":
        updated.email = value.toLowerCase();
        setLead(updated);
        setStep("phone");
        botSay(resolve("phone", updated));
        break;

      case "phone": {
        const isSkip = value.trim().toLowerCase() === "skip";
        updated.phone = isSkip ? "—" : value.replace(/\D/g, "");
        setLead(updated);
        setStep("requirement");
        botSay(resolve("requirement", updated));
        break;
      }

      case "requirement": {
        updated.requirement = value;
        const final: LeadData = {
          intent:      updated.intent as Intent,
          name:        updated.name || "",
          email:       updated.email || "",
          phone:       updated.phone || "",
          requirement: value,
          submittedAt: new Date().toISOString(),
        };
        setLead(final);
        saveLead(final);
        setStep("done");
        botSay(resolve("done", final), 900);
        break;
      }
    }
  };

  const handleWhatsApp = () => {
    const lines = [
      `Hi! I'm ${lead.name} from the Workeraa website.`,
      lead.intent === "hiring"
        ? "I'm looking to hire talent."
        : "I'm looking for a job.",
      lead.requirement ? `Requirement: ${lead.requirement}` : "",
      lead.phone && lead.phone !== "—" ? `Phone: ${lead.phone}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(lines)}`;

    // Use anchor trick — bypasses popup blockers unlike window.open
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Show skip button when on phone step (always visible, not just after retries)
  const showSkipPhone = step === "phone";
  const canType       = step !== "intent" && step !== "done";

  const inputPlaceholders: Partial<Record<Step, string>> = {
    name:        "Your full name",
    email:       "your@email.com",
    phone:       "10-digit mobile number",
    requirement: "Brief description of your need...",
  };

  const progressWidth: Partial<Record<Step, string>> = {
    name: "20%", email: "40%", phone: "60%", requirement: "80%", done: "100%",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* ── FAB ── */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Open support chat"
        className="relative w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="x"
              initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <FiX className="text-2xl" />
            </motion.span>
          ) : (
            <motion.span
              key="support"
              initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FiHeadphones className="text-2xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse ring */}
      {!isOpen && (
        <motion.div
          animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-blue-400 rounded-full -z-10 pointer-events-none"
        />
      )}

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="absolute bottom-20 right-0 w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ maxHeight: "540px" }}
          >
            {/* Header */}
            <div className="bg-blue-600 px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FiHeadphones className="text-white text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Workeraa Support</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
                  <p className="text-blue-100 text-xs">Online · typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            {step !== "intent" && (
              <div className="h-1 bg-gray-100 shrink-0">
                <motion.div
                  className="h-full bg-blue-500"
                  animate={{ width: progressWidth[step] || "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f0f2f5]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line
                      ${msg.from === "user"
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : msg.isError
                          ? "bg-red-50 text-red-600 border border-red-200 rounded-tl-sm"
                          : "bg-white text-gray-800 rounded-tl-sm"
                      }`}
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                </div>
              ))}

              {/* Typing dots */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        className="w-2 h-2 bg-gray-400 rounded-full block"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Intent chips */}
              {step === "intent" && !isTyping && messages.length > 0 && (
                <div className="flex flex-col gap-2 items-end mt-1">
                  {[
                    { label: "🏢 I want to hire talent", value: "hiring" as Intent },
                    { label: "💼 I'm looking for a job",  value: "jobseeker" as Intent },
                  ].map((opt) => (
                    <motion.button
                      key={opt.value}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleIntent(opt.value)}
                      className="bg-white border border-blue-300 text-blue-700 text-sm px-4 py-2 rounded-full shadow-sm hover:bg-blue-50 transition-colors"
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Done CTA */}
              {step === "done" && !isTyping && (
                <div className="flex justify-start mt-1">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2.5 rounded-full shadow-md transition-colors"
                  >
                    <BsWhatsapp />
                    Chat on WhatsApp
                    <FiArrowRight className="text-xs" />
                  </motion.button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {canType && (
              <motion.div
                animate={shake ? { x: [-6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
                className="px-3 py-3 bg-white border-t border-gray-100 shrink-0 space-y-2"
              >
                {/* Skip button for phone step — always visible */}
                {showSkipPhone && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        userSay("Skip");
                        setInput("");
                        setRetryCount(0);
                        advance("skip");
                      }}
                      className="text-xs text-gray-400 hover:text-blue-500 underline underline-offset-2 transition-colors"
                    >
                      Skip phone number →
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type={
                      step === "email" ? "email"
                      : step === "phone" ? "tel"
                      : "text"
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={inputPlaceholders[step] || "Type your answer..."}
                    maxLength={step === "phone" ? 15 : step === "name" ? 60 : undefined}
                    className="flex-1 text-sm px-3 py-2 rounded-full bg-gray-100 border-none outline-none text-gray-800 placeholder-gray-400"
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSubmit}
                    disabled={!input.trim()}
                    className="w-9 h-9 rounded-full bg-blue-600 disabled:bg-gray-300 flex items-center justify-center shrink-0 transition-colors"
                  >
                    <FiSend className="text-white text-sm" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Footer */}
            <div className="bg-gray-50 border-t border-gray-100 py-2 text-center shrink-0">
              <p className="text-[11px] text-gray-400">🔒 Secure · Workeraa Support</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};