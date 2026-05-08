import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WZN Deal & Tool Finder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07111f",
          color: "white",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "28px",
            padding: "54px",
            background:
              "linear-gradient(135deg, rgba(43,212,167,0.16), rgba(37,99,235,0.10))",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                color: "#07111f",
                fontWeight: 900,
                fontSize: "24px",
              }}
            >
              WZN
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "30px", fontWeight: 700 }}>
                WZN Deal & Tool Finder
              </div>
              <div style={{ color: "#a7f3d0", fontSize: "22px" }}>
                Tools, diensten en deals voor ondernemers
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                maxWidth: "820px",
                fontSize: "64px",
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              Vind praktische tools voor jouw bedrijf
            </div>
            <div
              style={{
                maxWidth: "760px",
                color: "#cbd5e1",
                fontSize: "26px",
                lineHeight: 1.35,
              }}
            >
              AI-tools, hosting, drukwerk, boekhouding, social media en meer.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
