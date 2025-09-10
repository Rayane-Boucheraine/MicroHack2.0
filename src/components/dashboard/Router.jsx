"use client";
import { useRouter } from "next/navigation";

export default function Router() {
  const router = useRouter();
  // Keep component safe if used: redirect in effect
  // but this component is no longer used on landing
  if (typeof window !== "undefined") {
    Promise.resolve().then(() => router.push("/dashboard/problems"));
  }
  return null;
}
