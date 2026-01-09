"use client";

import { useEffect } from "react";

export function ConsoleSignature() {
  useEffect(() => {
    console.log(
      "%c ZORRO %c Speed is a weapon.",
      "background: #000; color: #fff; padding: 4px 8px; font-weight: bold;",
      "color: #888; padding: 4px 8px;"
    );
  }, []);

  return null;
}
