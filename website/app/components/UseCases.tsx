"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    title: "Municipal Water Utilities",
    description:
      "Daily monitoring of treatment plant influent and effluent. Verify GAC and ion exchange systems are removing PFAS before water enters distribution. Replace quarterly lab testing with weekly on-site screening.",
    impact: "Save $50K+/year in lab costs per facility",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: "text-accent-blue",
  },
  {
    title: "Department of Defense",
    description:
      "700+ military installations with known PFAS contamination from AFFF firefighting foam. Real-time monitoring of remediation progress at contaminated wells, groundwater plumes, and treatment systems.",
    impact: "Support $31B PFAS cleanup commitment",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "text-accent-cyan",
  },
  {
    title: "Environmental Consultants",
    description:
      "Rapid site characterization for contaminated land assessments. Screen dozens of sampling points per day instead of waiting weeks for lab results. Triage which samples need full laboratory confirmation.",
    impact: "10x faster site assessments",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    color: "text-accent-emerald",
  },
  {
    title: "Industrial Compliance",
    description:
      "Semiconductor fabs, chrome plating facilities, and chemical manufacturers must monitor PFAS in their wastewater discharge. Continuous monitoring prevents violations and enables real-time process control.",
    impact: "Prevent $100K+ EPA violation fines",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    color: "text-accent-amber",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-wider mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            From treatment plants to contaminated sites.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Every organization that touches water affected by PFAS needs faster,
            cheaper testing. TRACE-1 serves the full spectrum.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-surface rounded-xl border border-border"
            >
              <div className={`mb-4 ${useCase.color}`}>{useCase.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {useCase.description}
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-border w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                <span className="text-xs font-mono text-accent-emerald">
                  {useCase.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
