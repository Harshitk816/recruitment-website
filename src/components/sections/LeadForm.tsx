"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export type FieldConfig =
  | {
      type: "text" | "email" | "tel";
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
    }
  | {
      type: "select";
      name: string;
      label: string;
      options: string[];
      required?: boolean;
    }
  | {
      type: "textarea";
      name: string;
      label: string;
      placeholder?: string;
      rows?: number;
      required?: boolean;
    };

interface LeadFormProps {
  heading: string;
  fields: FieldConfig[];
  buttonText?: string;
  onSubmit?: (data: Record<string, string>) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  heading,
  fields,
  buttonText = "Submit",
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-xl font-bold mb-2">We&apos;ll be in touch!</h3>
        <p className="text-gray-300 text-sm">Our team will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
      <h2 className="text-white text-xl font-bold mb-6 uppercase tracking-wide">
        {heading}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>

            {/* TEXT / EMAIL / TEL */}
            {(field.type === "text" || field.type === "email" || field.type === "tel") && (
              <input
                type={field.type}
                name={field.name}
                placeholder={`${field.label}${field.required ? " *" : ""}`}
                required={field.required}
                value={formData[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
              />
            )}

            {/* SELECT */}
            {field.type === "select" && (
              <div className="relative">
                <select
                  name={field.name}
                  required={field.required}
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full appearance-none bg-white/10 border border-white/25 text-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                >
                  <option value="" disabled className="bg-gray-900">
                    {field.label}{field.required ? " *" : ""}
                  </option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt} className="bg-gray-900">
                      {opt}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            )}

            {/* TEXTAREA */}
            {field.type === "textarea" && (
              <textarea
                name={field.name}
                placeholder={`${field.label}${field.required ? " *" : ""}`}
                required={field.required}
                rows={field.rows ?? 3}
                value={formData[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all resize-none"
              />
            )}

          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-4 rounded-xl transition-colors mt-2"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};