import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BioRegenEx — Regenerative Cellular Therapy";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse at 70% 20%, #12294a 0%, #0a1b33 60%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 40, fontWeight: 700 }}>
          <span style={{ color: "#ffffff" }}>Bio</span>
          <span style={{ color: "#15b8a6" }}>RegenEx</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#15b8a6",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Regenerative Cellular Therapy
          </div>
          <div style={{ color: "#ffffff", fontSize: 62, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>
            Your body has a natural repair system.
          </div>
          <div style={{ color: "#bcd0e6", fontSize: 30, marginTop: 24, maxWidth: 820 }}>
            Book a free, no-pressure consultation with a licensed provider.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              background: "#059669",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
              padding: "16px 34px",
              borderRadius: 14,
            }}
          >
            Free Consultation
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
