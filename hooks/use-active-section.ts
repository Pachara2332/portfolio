"use client";

import { useEffect, useState, useCallback } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 100;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollY) {
        setActiveSection(sectionIds[i]);
        return;
      }
    }

    setActiveSection(sectionIds[0] || "");
  }, [sectionIds]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}
