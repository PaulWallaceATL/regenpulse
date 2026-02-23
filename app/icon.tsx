import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #35588a 0%, #4c78ba 55%, #7fb6e0 100%)",
          borderRadius: 8,
        }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 13.5c2.2 0 2.2-3.8 4.4-3.8 2.2 0 2.2 3.8 4.4 3.8s2.2-3.8 4.4-3.8c1.4 0 2 .8 2.8 2" />
          <path d="M4.5 18h15" />
        </svg>
      </div>
    ),
    size
  );
}
