"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (status === "authenticated" && session?.user?.role !== "admin") {
      router.push("/dashboard");
    }
  }, [status, session]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-purple-400">
        VERIFYING CLEARANCE...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-purple-400">
        ADMIN COMMAND CENTER
      </h1>

      <p className="mt-4 text-gray-400">
        Welcome High Command
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="border border-purple-800 p-6 rounded-xl">
          Users Panel
        </div>

        <div className="border border-purple-800 p-6 rounded-xl">
          System Control
        </div>

        <div className="border border-purple-800 p-6 rounded-xl">
          Security Logs
        </div>
      </div>
    </div>
  );
}