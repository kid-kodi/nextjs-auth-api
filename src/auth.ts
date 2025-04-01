import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import api from "./lib/axiosInstance";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const { data } = await api.post(`/api/auth/login`, {
            email,
            password,
          });
          if (data.success) {
            return {
              id: data.user._id,
              name: data.user.fullName,
              email: data.user.email,
              role: data.user.role,
              accessToken: data.token, // Store token to use in API calls
            };
          } else {
            return null;
          }
        }

        return null;
      },
    }),
  ],
});
