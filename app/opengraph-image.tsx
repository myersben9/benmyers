import { ImageResponse } from "next/og";
import { siteConfig } from "@/content";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(800px 600px at 10% 0%, #1c1740, transparent), radial-gradient(700px 500px at 100% 100%, #0e2a33, transparent), #07070d",
          color: "#f4f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #a78bfa, #4cc9e6)",
              color: "#07070d",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ fontSize: "28px", color: "#a1a1b3" }}>
            {siteConfig.domain}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "76px", fontWeight: 700, letterSpacing: "-2px" }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "40px",
              marginTop: "12px",
              background: "linear-gradient(100deg, #a78bfa, #4cc9e6)",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: 600,
            }}
          >
            {siteConfig.title}
          </div>
          <div
            style={{
              fontSize: "28px",
              marginTop: "24px",
              color: "#a1a1b3",
              maxWidth: "900px",
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
