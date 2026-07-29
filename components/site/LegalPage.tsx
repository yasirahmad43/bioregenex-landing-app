import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[820px] px-5 py-14 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-deep hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mt-6 text-[clamp(30px,4vw,44px)] font-medium leading-tight text-ink">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

          <div className="legal mt-10 space-y-6 text-[15px] leading-relaxed text-ink-2">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
