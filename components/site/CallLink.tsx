"use client";

import { site } from "@/lib/site";
import { trackCall } from "@/lib/analytics";

export default function CallLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={site.phoneHref} className={className} onClick={() => trackCall(location)}>
      {children}
    </a>
  );
}
