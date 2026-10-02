import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <img src={logoDataUri} width={180} height={180} alt="" />,
    size
  );
}
