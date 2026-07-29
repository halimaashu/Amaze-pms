

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export const runtime = "nodejs"; // force Node runtime for auth

export { handler as GET, handler as POST };
