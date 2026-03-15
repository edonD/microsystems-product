"use client";

import { motion } from "framer-motion";

const competitors = [
  {
    name: "Laboratory (EPA 533/537.1)",
    type: "Incumbent",
    detection: "2 ppt",
    time: "2-4 weeks",
    cost: "$300-600",
    portable: false,
    quantitative: true,
    multiPfas: "24-40 species",
    weakness: "Slow, expensive, requires $500K equipment",
  },
  {
    name: "FREDsense FRED-PFAS",
    type: "Startup (Calgary)",
    detection: "~70 ppt",
    time: "3-4 hours",
    cost: "~$150",
    portable: true,
    quantitative: false,
    multiPfas: "Total PFAS",
    weakness: "Above EPA MCL, not quantitative, slow",
  },
  {
    name: "Verralize",
    type: "Startup (Australia)",
    detection: "4 ppt",
    time: "12-15 min",
    cost: "TBD",
    portable: true,
    quantitative: true,
    multiPfas: "Select PFAS",
    weakness: "Pre-commercial (Q1 2026), unproven at scale",
  },
  {
    name: "Grapheal Fluorograph",
    type: "Startup (France)",
    detection: "Limited data",
    time: "Minutes",
    cost: "TBD",
    portable: true,
    quantitative: false,
    multiPfas: "Limited",
    weakness: "Limited sensitivity data, early stage",
  },
  {
    name: "Veriflux TRACE-1",
    type: "This product",
    detection: "<2 ppt",
    time: "<15 min",
    cost: "$75",
    portable: true,
    quantitative: true,
    multiPfas: "PFOA + PFOS",
    weakness: "In development",
    highlight: true,
  },
];

export default function Competitors() {
  return (
    <section className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-accent-cyan uppercase tracking-wider mb-4">
            Competitive Landscape
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The gap in PFAS testing.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            No existing solution combines sub-regulatory sensitivity, rapid
            results, quantitative output, and field portability. TRACE-1 fills
            that gap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-xs font-medium text-muted">
                  Solution
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted">
                  Detection
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted">
                  Speed
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-muted">
                  Cost
                </th>
                <th className="text-center py-3 px-3 text-xs font-medium text-muted">
                  Portable
                </th>
                <th className="text-center py-3 px-3 text-xs font-medium text-muted">
                  Quantitative
                </th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, i) => (
                <tr
                  key={comp.name}
                  className={`border-b border-border/50 ${
                    comp.highlight
                      ? "bg-accent-blue/5"
                      : i % 2 === 0
                      ? "bg-surface/30"
                      : ""
                  }`}
                >
                  <td className="py-3 px-3">
                    <div
                      className={`text-sm font-medium ${
                        comp.highlight ? "text-accent-blue" : ""
                      }`}
                    >
                      {comp.name}
                    </div>
                    <div className="text-[10px] text-muted">{comp.type}</div>
                  </td>
                  <td className="py-3 px-3 text-xs font-mono">
                    {comp.detection}
                  </td>
                  <td className="py-3 px-3 text-xs font-mono">{comp.time}</td>
                  <td className="py-3 px-3 text-xs font-mono">{comp.cost}</td>
                  <td className="py-3 px-3 text-center">
                    {comp.portable ? (
                      <span className="text-accent-emerald text-xs">Yes</span>
                    ) : (
                      <span className="text-red-400 text-xs">No</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {comp.quantitative ? (
                      <span className="text-accent-emerald text-xs">Yes</span>
                    ) : (
                      <span className="text-red-400 text-xs">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-xs text-muted text-center"
        >
          Data compiled from public sources, company announcements, and peer-reviewed publications (2024-2026).
        </motion.p>
      </div>
    </section>
  );
}
