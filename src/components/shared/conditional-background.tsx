"use client";

import { usePathname } from "next/navigation";

export default function ConditionalBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const backgroundClass =
    pathname === "/"
      ? "bg-[url('/images/bg.png')]"
      : "bg-[url('/images/bg-2.png')]";

  return (
    <div className={`${backgroundClass} h-full bg-cover bg-top bg-no-repeat`}>
      {children}
    </div>
  );
}
