import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RegenPulse",
    short_name: "RegenPulse",
    description:
      "Regenerative wellness and performance programs with premium member experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fc",
    theme_color: "#35588a",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
