import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veriflux Admin — Founder Roadmap",
  description: "Internal roadmap and fabrication guide for Veriflux TRACE-1",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
