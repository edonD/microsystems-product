"use client";

import { motion } from "framer-motion";

const specs = [
  { parameter: "PFOA Detection Limit", trace1: "<2 ppt", labMethod: "2 ppt (EPA 533)" },
  { parameter: "PFOS Detection Limit", trace1: "<2 ppt", labMethod: "2 ppt (EPA 537.1)" },
  { parameter: "Dynamic Range", trace1: "1 - 10,000 ppt", labMethod: "2 - 40,000 ppt" },
  { parameter: "Time to Result", trace1: "<15 minutes", labMethod: "10-28 days" },
  { parameter: "Sample Volume", trace1: "500 uL", labMethod: "250-500 mL" },
  { parameter: "Cost per Test", trace1: "$75", labMethod: "$300-600" },
  { parameter: "Operator Training", trace1: "30 min tutorial", labMethod: "PhD-level chemist" },
  { parameter: "Equipment Cost", trace1: "$3,500 reader", labMethod: "$500,000+ LC-MS/MS" },
  { parameter: "Data Reporting", trace1: "Instant cloud upload", labMethod: "PDF via email" },
  { parameter: "Portability", trace1: "Handheld (400g)", labMethod: "Fixed laboratory" },
];

export default function Specs() {
  return (
    <section id="specs" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-accent-amber uppercase tracking-wider mb-4">
            Specifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Laboratory performance. Field simplicity.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            TRACE-1 matches laboratory detection limits while eliminating
            complexity, wait time, and cost. Side-by-side comparison with
            standard EPA laboratory methods.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">
                  Parameter
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-accent-blue">
                  TRACE-1
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">
                  Lab Testing (EPA Methods)
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, i) => (
                <tr
                  key={spec.parameter}
                  className={`border-b border-border/50 ${
                    i % 2 === 0 ? "bg-surface/30" : ""
                  }`}
                >
                  <td className="py-3 px-4 text-sm text-muted">
                    {spec.parameter}
                  </td>
                  <td className="py-3 px-4 text-sm font-mono font-medium text-foreground">
                    {spec.trace1}
                  </td>
                  <td className="py-3 px-4 text-sm font-mono text-muted">
                    {spec.labMethod}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Reader specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: "Reader Dimensions", value: '150 x 80 x 30 mm' },
            { label: "Weight", value: "~400 g" },
            { label: "Battery Life", value: "8+ hours" },
            { label: "Connectivity", value: "BLE 5.0 + WiFi" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 bg-surface rounded-lg border border-border text-center"
            >
              <div className="text-lg font-mono font-bold text-foreground">
                {item.value}
              </div>
              <div className="text-xs text-muted mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
