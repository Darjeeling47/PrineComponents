import { colorMapperChip, getColorSet } from "@/utils/color";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Avatar({
  id,
  src,
  alt,
  fallback,
  size = 50,
  isOpenRing = false,
}: AvatarProps) {
  const colorSet = getColorSet();
  const [error, setError] = useState(true);
  const [color, setColor] = useState("gray");
  const [formatedFallback, setFormatedFallback] = useState(fallback);

  useEffect(() => {
    // Check if the fallback is empty
    if (!fallback) {
      setFormatedFallback("?");
      return;
    }

    // Cut fallback to 2 characters
    if (fallback.length > 2) {
      setFormatedFallback(fallback.slice(0, 2));
    }

    // Check color
    const colorsLength = getColorSet().length;
    const colorIndex = Number(fallback.charCodeAt(0) % colorsLength);
    setColor(colorSet[colorIndex]);

    // Check if the src is valid
    if (src && src.length > 0) {
      setError(false);
    }
  }, []);

  return (
    <>
      {!error ? (
        <Image
          id={`avatar-${id}`}
          src={src}
          alt={alt}
          width={size}
          height={size}
          onError={() => setError(true)}
          className={clsx(
            "rounded-full",
            "object-cover",
            // --- Custom ---
            isOpenRing ? "ring-2 ring-white" : "border border-gray-200",
          )}
        />
      ) : (
        <div
          id={`avatar-${id}`}
          className={clsx(
            "flex items-center justify-center",
            "rounded-full",
            // --- Color / Background (Custom) ---
            colorMapperChip(color),
            // --- Custom ---
            isOpenRing ? "ring-2 ring-white" : "",
          )}
          style={{ width: size, height: size }}
        >
          <span
            className={clsx("select-none", "text-center font-medium")}
            style={{
              fontSize: size / 2.5,
              lineHeight: `${size}px`,
            }}
          >
            {formatedFallback}
          </span>
        </div>
      )}
    </>
  );
}

interface AvatarProps {
  id?: string;
  src: string;
  alt: string;
  fallback: string;
  size?: number;
  isOpenRing?: boolean;
}
