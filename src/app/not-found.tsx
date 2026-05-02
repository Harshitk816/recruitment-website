// app/not-found.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-8"
          >
            404 — Page Not Found
          </motion.div>

          {/* Giant number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative mb-8 select-none"
            aria-hidden="true"
          >
            <span
              className="font-black text-gray-300 leading-none block"
              style={{ fontSize: "clamp(7rem, 20vw, 16rem)" }}
            >
              404
            </span>
            {/* Blue accent slash through */}
            <span
              className="absolute top-1/2 left-0 w-24 h-1.5 bg-blue-600 rounded-full -translate-y-1/2"
            />
          </motion.div>

          {/* Divider row — like your process steps */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="border-t border-gray-100 pt-8 mb-8 grid md:grid-cols-[1fr_auto] gap-8 items-end"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                This page took a day off.
              </h1>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-[44ch]">
                The page you&apos;re looking for has clocked out — or never showed up for
                the shift. Let&apos;s get you back on track.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <FiHome size={15} />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 text-sm font-semibold rounded-xl transition-colors"
              >
                Go Back
              </button>
            </div>
          </motion.div>

          {/* Nudge — styled like your differentiator tiles */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="rounded-2xl bg-gray-900 text-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                Still need help?
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors group whitespace-nowrap"
            >
              Get in touch
              <FiArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Footer strip */}
      <footer className="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
        <span className="text-xs text-gray-400">© 2026 Workeraa</span>
        <span className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          All systems operational
        </span>
      </footer>

    </main>
    
  );
}