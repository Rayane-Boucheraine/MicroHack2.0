"use client";
import { useRouter } from "next/navigation";

export default function Router() {
  const router = useRouter();
  router.push("/dashboard/problems");
  return <div>Router</div>;
}
