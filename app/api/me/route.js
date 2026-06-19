import { prisma } from "@/lib/prisma";

export async function GET(req) {
  // TEMP SIMPLE VERSION (we'll upgrade to NextAuth later)
  const email = req.headers.get("x-user-email");

  if (!email) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ user });
}