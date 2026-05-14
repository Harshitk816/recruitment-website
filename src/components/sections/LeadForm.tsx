"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxgGgjguu1gOfL4-HT2FeD19LPvje2Cym0Fi7YbPOXJj715YUK0hsu1nIiR6QE0E07bqQ/exec"

export type FieldConfig =
  | { type: "text" | "email" | "tel"; name: string; label: string; placeholder?: string; required?: boolean; }
  | { type: "select"; name: string; label: string; options: string[]; required?: boolean; }
  | { type: "textarea"; name: string; label: string; placeholder?: string; rows?: number; required?: boolean; };

interface LeadFormProps {
  heading: string;
  fields: FieldConfig[];
  buttonText?: string;
  onSubmit?: (data: Record<string, string>) => void;
}

const LOCATION_OPTIONS = ["Delhi", "Noida", "Gurugram", "Others"];

export const LeadForm: React.FC<LeadFormProps> = ({
  heading,
  fields,
  buttonText = "Submit",
  onSubmit,
}) => {
  const router = useRouter();

  const [formData, setFormData]           = useState<Record<string, string>>({});
  const [locationSelect, setLocationSelect] = useState("");
  const [customLocation, setCustomLocation] = useState("");
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [error, setError]                 = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const resolvedLocation =
      locationSelect === "Others" ? customLocation.trim() : locationSelect;

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      body.append("source_url", window.location.href);
      body.append("location", resolvedLocation);

      await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", body });

      onSubmit?.({ ...formData, location: resolvedLocation });

      // ── Redirect to thank you page ──
      router.push("/thankyou");

    } catch {
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
      <h2 className="text-white text-xl font-bold mb-6 uppercase tracking-wide">{heading}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            {(field.type === "text" || field.type === "email" || field.type === "tel") && (
              <input
                type={field.type} name={field.name}
                placeholder={`${field.label}${field.required ? " *" : ""}`}
                required={field.required} disabled={isSubmitting}
                value={formData[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all disabled:opacity-50"
              />
            )}
            {field.type === "select" && (
              <div className="relative">
                <select
                  name={field.name} required={field.required} disabled={isSubmitting}
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full appearance-none bg-white/10 border border-white/25 text-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all disabled:opacity-50"
                >
                  <option value="" disabled className="bg-gray-900">
                    {field.label}{field.required ? " *" : ""}
                  </option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt} className="bg-gray-900">{opt}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            )}
            {field.type === "textarea" && (
              <textarea
                name={field.name}
                placeholder={`${field.label}${field.required ? " *" : ""}`}
                required={field.required} rows={field.rows ?? 3} disabled={isSubmitting}
                value={formData[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all resize-none disabled:opacity-50"
              />
            )}
          </div>
        ))}

        {/* Company */}
        <input
          type="text" name="company" placeholder="Company *"
          required disabled={isSubmitting}
          value={formData["company"] ?? ""}
          onChange={(e) => handleChange("company", e.target.value)}
          className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all disabled:opacity-50"
        />

        {/* Location */}
        <div className="relative">
          <select
            required disabled={isSubmitting}
            value={locationSelect}
            onChange={(e) => {
              setLocationSelect(e.target.value);
              if (e.target.value !== "Others") setCustomLocation("");
            }}
            className="w-full appearance-none bg-white/10 border border-white/25 text-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all disabled:opacity-50"
          >
            <option value="" disabled className="bg-gray-900">Location *</option>
            {LOCATION_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-gray-900">{opt}</option>
            ))}
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Custom location */}
        {locationSelect === "Others" && (
          <input
            type="text" placeholder="Enter your location *"
            required disabled={isSubmitting}
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
            autoFocus
            className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all disabled:opacity-50"
          />
        )}

        <button
          type="submit" disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-colors mt-2"
        >
          {isSubmitting ? "Sending..." : buttonText}
        </button>

        {error && (
          <p className="text-red-400 text-sm text-center">
            Something went wrong. Please try again or{" "}
            <a href="mailto:connect@workeraa.co.in" className="underline">
              contact us directly
            </a>.
          </p>
        )}
      </form>
    </div>
  );
};