"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does TRACE-1 achieve sub-4 ppt detection without LC-MS/MS?",
    answer:
      "TRACE-1 uses molecularly imprinted polymer (MIP) electrodes — synthetic recognition elements with nanoscale cavities shaped to selectively bind PFOA or PFOS molecules. When target molecules bind, they change the electrode's electrical impedance, measured via electrochemical impedance spectroscopy (EIS). Combined with microfluidic pre-concentration, this achieves detection limits below 2 ppt — meeting the EPA's 4 ppt MCL requirement.",
  },
  {
    question: "Is TRACE-1 a replacement for laboratory testing?",
    answer:
      "TRACE-1 is designed as a screening and monitoring tool. It enables frequent on-site testing that would be impractical with lab methods. For regulatory compliance reporting, utilities may still submit periodic laboratory confirmations. However, TRACE-1 provides the real-time visibility needed to manage treatment systems, triage samples, and respond to contamination events immediately.",
  },
  {
    question: "What PFAS compounds can TRACE-1 detect?",
    answer:
      "The initial TRACE-1 cartridge detects PFOA (perfluorooctanoic acid) and PFOS (perfluorooctane sulfonate) — the two compounds regulated at 4 ppt by the EPA's 2024 NPDWR. Future cartridge variants will expand to additional PFAS including GenX, PFHxS, and PFNA as regulatory requirements evolve.",
  },
  {
    question: "How do MIPs compare to biological sensors for PFAS detection?",
    answer:
      "MIPs offer significant advantages over antibody or enzyme-based biosensors: they are thermally stable (5-45 degrees C operating range), chemically robust in varied water matrices, have 12+ month shelf life without refrigeration, and cost a fraction of biological recognition elements. This makes them ideal for field deployment where cold chain logistics and reagent stability are challenges.",
  },
  {
    question: "What water types can be tested?",
    answer:
      "TRACE-1 is validated for finished drinking water, source water, and groundwater. The integrated microfluidic sample handling includes on-chip filtration for particulates. Testing of wastewater and industrial effluent is on the development roadmap, requiring additional on-chip sample preparation to handle higher matrix complexity.",
  },
  {
    question: "How much does ongoing testing cost?",
    answer:
      "The TRACE-1 reader is a one-time purchase at $3,500. Disposable cartridges are sold in 10-packs at $750 ($75 per test). The cloud dashboard subscription for data management and compliance reporting is $300/month. A typical utility running 200 tests/year spends approximately $18,600 — compared to $60,000-120,000 for equivalent lab testing.",
  },
  {
    question: "When will TRACE-1 be available?",
    answer:
      "Veriflux is currently in the development and validation phase. Beta units for pilot testing with select water utility partners are expected in Q4 2026. General availability is targeted for mid-2027. Join the early access program to be among the first to evaluate TRACE-1.",
  },
  {
    question: "What regulatory approvals are needed?",
    answer:
      "PFAS water testing devices do not require FDA approval as they are environmental monitoring instruments, not medical devices. Veriflux is pursuing ISO 17025 accreditation for the testing methodology and EPA method equivalency validation. We are engaging with state drinking water programs to establish TRACE-1 data as acceptable for compliance monitoring.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium pr-8 group-hover:text-accent-blue transition-colors">
          {faq.question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`shrink-0 text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed pb-5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-accent-cyan uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Common questions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
