// Lightweight, provider-agnostic analytics helpers.
// Safe to call whether or not GTM / GA4 / Meta Pixel are configured —
// they no-op until the corresponding NEXT_PUBLIC_* env var is set.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, unknown>;

function pushDataLayer(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Fire a generic conversion/interaction event across all connected tools. */
export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  pushDataLayer(event, params);
  window.gtag?.("event", event, params);
}

/** Fire the primary lead conversion event (form submitted successfully). */
export function trackLead(params: EventParams = {}) {
  trackEvent("generate_lead", params);
  if (typeof window !== "undefined") {
    window.fbq?.("track", "Lead", params);
  }
}

/** Fire a click-to-call event. */
export function trackCall(location: string) {
  trackEvent("phone_click", { location });
  if (typeof window !== "undefined") {
    window.fbq?.("track", "Contact", { location });
  }
}
