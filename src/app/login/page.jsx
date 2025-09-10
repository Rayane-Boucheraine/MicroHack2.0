"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-[#0f0f10] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="mt-1 text-white/70">Sign in to your BuildFlow account</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined") {
              localStorage.setItem(
                "buildflowUser",
                JSON.stringify({ email, name: email.split("@")[0] })
              );
            }
            router.push("/dashboard/tasks");
          }}
        >
          <div>
            <label className="block text-sm text-white/80" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 outline-none placeholder:text-white/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 outline-none placeholder:text-white/50"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#FE7F26] to-[#ff974d] px-4 py-2 font-medium text-[#141414] hover:opacity-95"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/70">
          Don&apos;t have an account? {" "}
          <Link className="text-[#FE7F26]" href="/signup">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}

