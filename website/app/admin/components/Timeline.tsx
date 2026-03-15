"use client";

const stages = [
  { label: "Validation", months: "M1-2", width: "14%", color: "#3b82f6" },
  { label: "Design", months: "M2-4", width: "14%", color: "#06b6d4" },
  { label: "Fabrication", months: "M4-7", width: "21%", color: "#10b981" },
  { label: "Testing", months: "M5-8", width: "21%", color: "#f59e0b" },
  { label: "Packaging", months: "M7-10", width: "21%", color: "#ef4444" },
  { label: "Scale-up", months: "M10-13", width: "21%", color: "#8b5cf6" },
  { label: "GTM", months: "M11-14", width: "21%", color: "#ec4899" },
];

export default function Timeline() {
  return (
    <div className="p-6 bg-surface rounded-xl border border-border">
      <h3 className="text-sm font-semibold mb-4">Project Timeline (14 months)</h3>
      <div className="relative">
        {/* Month markers */}
        <div className="flex justify-between text-[10px] font-mono text-muted mb-2">
          {Array.from({ length: 15 }, (_, i) => (
            <span key={i}>M{i}</span>
          ))}
        </div>

        {/* Gantt bars */}
        <div className="space-y-2">
          {stages.map((stage) => {
            const startMonth = parseInt(stage.months.split("-")[0].replace("M", ""));
            const endMonth = parseInt(stage.months.split("-")[1]);
            const left = (startMonth / 14) * 100;
            const width = ((endMonth - startMonth) / 14) * 100;

            return (
              <div key={stage.label} className="relative h-7 flex items-center">
                <span className="text-[10px] font-mono text-muted w-20 shrink-0">
                  {stage.label}
                </span>
                <div className="flex-1 relative h-5">
                  <div
                    className="absolute h-full rounded-md flex items-center px-2"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      backgroundColor: `${stage.color}30`,
                      borderLeft: `3px solid ${stage.color}`,
                    }}
                  >
                    <span
                      className="text-[9px] font-mono font-medium"
                      style={{ color: stage.color }}
                    >
                      {stage.months}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory track */}
        <div className="mt-4 pt-3 border-t border-border/50">
          <div className="relative h-7 flex items-center">
            <span className="text-[10px] font-mono text-muted w-20 shrink-0">
              Regulatory
            </span>
            <div className="flex-1 relative h-5">
              <div
                className="absolute h-full rounded-md flex items-center px-2"
                style={{
                  left: "7%",
                  width: "86%",
                  backgroundColor: "rgba(156, 163, 175, 0.15)",
                  borderLeft: "3px solid #9ca3af",
                }}
              >
                <span className="text-[9px] font-mono text-muted">
                  Parallel — ISO 17025 + EPA method equivalency
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
