import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at 84% 18%, rgba(151, 201, 233, 0.4) 0%, rgba(151, 201, 233, 0) 38%), linear-gradient(135deg, #182b44 0%, #2a4a70 54%, #6898cb 100%)",
          color: "#f6fbff",
          padding: "56px 64px",
          fontFamily: "Manrope, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.24)",
            borderRadius: 24,
            padding: "42px 48px",
            background: "rgba(6, 15, 28, 0.24)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.32)",
                background: "linear-gradient(135deg, #35588a 0%, #4c78ba 55%, #7fb6e0 100%)",
              }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 13.5c2.2 0 2.2-3.8 4.4-3.8 2.2 0 2.2 3.8 4.4 3.8s2.2-3.8 4.4-3.8c1.4 0 2 .8 2.8 2" />
                <path d="M4.5 18h15" />
              </svg>
            </div>
            <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.02em" }}>RegenPulse</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: 860 }}>
              Regenerative Wellness, Elevated
            </div>
            <div style={{ fontSize: 28, opacity: 0.9, maxWidth: 860 }}>
              A premium platform for recovery, longevity, and performance.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
