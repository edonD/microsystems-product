export default function Footer() {
  return (
    <footer className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-accent-blue flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold tracking-tight">Veriflux</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Real-time water intelligence powered by microsystems engineering.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {["TRACE-1 Reader", "Cartridges", "Cloud Dashboard", "Pricing"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#product"
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Technology", "Specifications", "FAQ", "Documentation"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#technology"
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Contact", "Privacy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; 2026 Veriflux Microsystems. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Designed for the organizations protecting our water.
          </p>
        </div>
      </div>
    </footer>
  );
}
