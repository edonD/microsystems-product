"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "$300-600 per test",
    description:
      "Each PFAS lab test requires LC-MS/MS analysis costing hundreds of dollars. Utilities needing frequent monitoring face unsustainable costs.",
    color: "text-red-400",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "2-4 weeks for results",
    description:
      "Samples must be shipped to one of ~200 certified labs in the US. Treatment plants cannot verify their systems work in real-time.",
    color: "text-amber-400",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "100M+ Americans exposed",
    description:
      "PFAS contamination has been detected in the water supplies serving over 100 million people across the United States.",
    color: "text-blue-400",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-wider mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            PFAS testing is stuck in the 1990s.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-4">
            In April 2024, the EPA set the first legally enforceable limit for
            PFAS in drinking water:{" "}
            <span className="text-foreground font-semibold">
              4 parts per trillion
            </span>{" "}
            for PFOA and PFOS. That is 4 drops in 250 Olympic swimming pools.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            66,000 water systems must comply by 2031. The only available testing
            method requires a $500,000 mass spectrometer in a specialized
            laboratory. There is no field-deployable solution that meets
            regulatory sensitivity.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-surface rounded-xl border border-border"
            >
              <div className={`mb-4 ${point.color}`}>{point.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 bg-surface rounded-xl border border-border"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold font-mono text-accent-amber">
                66,000
              </div>
              <div className="text-sm text-muted mt-1">
                US water systems affected
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-accent-amber">
                $1.5B/yr
              </div>
              <div className="text-sm text-muted mt-1">
                Estimated compliance cost
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-accent-amber">
                ~200
              </div>
              <div className="text-sm text-muted mt-1">
                Certified PFAS labs in US
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
