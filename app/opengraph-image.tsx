import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "AB Associates — Real Estate Consultants, Karachi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#0a0e12",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(14,124,140,0.35) 0%, rgba(10,14,18,0) 55%)",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#b89968",
            marginBottom: 24,
          }}
        >
          AB Associates · Karachi
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.05,
            color: "#f4f1ea",
            fontWeight: 400,
          }}
        >
          Real Estate, Considered.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#cdc7ba",
            marginTop: 24,
            maxWidth: 780,
          }}
        >
          Twenty years of hands-on real estate authority across HMR
          Waterfront, Phase 8, and DHA City.
        </div>
      </div>
    ),
    { ...size }
  );
}
