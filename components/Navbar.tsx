"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const updateLinePosition = (href: string) => {
    if (!containerRef.current) return;

    const activeLink = containerRef.current.querySelector(`a[href="${href}"]`) as HTMLElement;

    if (activeLink) {
      setLineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        opacity: 1,
      });
    } else {
      setLineStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  useEffect(() => {
    updateLinePosition(pathname);
  }, [pathname]);

  return (
    <div ref={containerRef} className="hidden md:flex gap-4 text-sm font-medium items-center relative self-stretch" onMouseLeave={() => updateLinePosition(pathname)}>
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={() => updateLinePosition(item.href)}
            className={`py-5 transition-colors duration-300 relative z-10 ${isActive ? "text-primary font-bold tracking-wide" : "text-gray-400 hover:text-text-main"}`}
          >
            {item.name}
          </Link>
        );
      })}

      <span
        className="absolute bottom-0 h-[2.5px] bg-primary transition-all duration-300 ease-out shadow-[0_1px_12px_rgba(99,102,241,0.8),0_0_4px_rgba(99,102,241,0.6)] pointer-events-none z-20 rounded-full"
        style={{
          left: `${lineStyle.left}px`,
          width: `${lineStyle.width}px`,
          opacity: lineStyle.opacity,
          transform: `scaleX(${lineStyle.opacity ? 1 : 0})`,
        }}
      />
    </div>
  );
}
