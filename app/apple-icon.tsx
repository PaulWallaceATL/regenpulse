import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #274162 0%, #3f6497 48%, #9bc8e7 100%)",
          borderRadius: 36,
        }}
      >
        <svg viewBox="0 0 24 24" width="86" height="86" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 13.5c2.2 0 2.2-3.8 4.4-3.8 2.2 0 2.2 3.8 4.4 3.8s2.2-3.8 4.4-3.8c1.4 0 2 .8 2.8 2" />
          <path d="M4.5 18h15" />
        </svg>
      </div>
    ),
    size
  );
}
