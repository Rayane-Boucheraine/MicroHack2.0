"use client";
import { useRouter } from "next/navigation";

export default function Router() {
  const router = useRouter();
  router.push("/dashboard/employers");
  return <div>Router</div>;
}
