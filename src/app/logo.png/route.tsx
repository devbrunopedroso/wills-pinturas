import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/logo";

// /logo.png - logo em PNG 512x512 para o JSON-LD (Google e IAs).
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logoDataUri} width={512} height={512} alt="" />,
    { width: 512, height: 512 }
  );
}
