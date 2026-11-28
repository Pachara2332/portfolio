import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Pachara Wongsasri, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/assets/profile/pachara-avatar.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#ffffff", alignItems: "center", padding: 80, gap: 64 }}>
        <div
          style={{
            display: "flex",
            padding: 10,
            borderRadius: 9999,
            background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
          }}
        >
          <img src={src} alt="" width={360} height={360} style={{ borderRadius: 9999, border: "10px solid #ffffff", objectFit: "cover" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", color: "#14213d" }}>
          <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2 }}>Pachara Wongsasri</div>
          <div style={{ fontSize: 38, color: "#2457f5", marginTop: 12 }}>Full-Stack Developer</div>
          <div style={{ fontSize: 28, color: "#5b6478", marginTop: 28, maxWidth: 620, lineHeight: 1.4 }}>
            Web apps, LINE OA &amp; LIFF, and mobile apps that real teams use every day.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
