
"use client";

import { usePathname } from "next/navigation";

import PoliciesPageSkeleton from "@/components/PoliciesPageSkeleton";
import PolicySkeleton from "@/components/PolicySkeleton";

export default function Loading() {
  const pathname = usePathname();

  const cleanPath = (pathname || "/").replace(/\/+$/, "") || "/";

  // Main policies listing page
  if (cleanPath === "/policies") {
    return <PoliciesPageSkeleton />;
  }

  // Individual policy pages
  return <PolicySkeleton />;
}
