"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Task {
  title: string;
  details: string;
  tools?: string[];
  cost?: string;
  duration?: string;
}

interface StageProps {
  number: number;
  title: string;
  timeline: string;
  color: string;
  tasks: Task[];
  defaultOpen?: boolean;
}

export default function RoadmapStage({
  number,
  title,
  timeline,
  color,
  tasks,
  defaultOpen = false,
}: StageProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-surface">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface-light/50 transition-colors"
      >
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-mono shrink-0`}
          style={{ backgroundColor: `${color}20`, color }}
        >
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-xs text-muted font-mono mt-0.5">{timeline}</p>
        </div>
        <div className="text-xs text-muted font-mono">{tasks.length} tasks</div>
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
            <div className="px-5 pb-5 space-y-3">
              {tasks.map((task, i) => (
                <div
                  key={i}
                  className="p-4 bg-background rounded-lg border border-border/50"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded border-2 shrink-0 mt-0.5"
                      style={{ borderColor: color }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium">{task.title}</h4>
                      <p className="text-xs text-muted leading-relaxed mt-1 whitespace-pre-line">
                        {task.details}
                      </p>
                      {task.tools && task.tools.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {task.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-muted"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex gap-4 mt-2">
                        {task.cost && (
                          <span className="text-[10px] font-mono text-accent-amber">
                            Cost: {task.cost}
                          </span>
                        )}
                        {task.duration && (
                          <span className="text-[10px] font-mono text-accent-cyan">
                            Duration: {task.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
