import { betterAuth } from "better-auth";
import { db } from "./db/drizzle";
import { users, sessions, accounts, verifications } from "./db/schema";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { sendEmail } from "@/lib/email/emailService.js"
import { VERFICATION_EMAIL_TEMPLATE } from "@/lib/email/emailTemplates.js"

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: false,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        html: VERFICATION_EMAIL_TEMPLATE(user.name, url),
      });
    },
  },
  trustedOrigins: [
    "https://humble-fiesta-xgg69vp5v7v2pj45-3001.app.github.dev/",
  ],
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
    schema: {
      users,
      sessions,
      accounts,
      verifications,
    },
    usePlural: true,
  }),
});
