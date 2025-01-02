import { betterAuth } from "better-auth";
import { db } from "./db/drizzle";
import { users, sessions, accounts, verifications } from "./db/schema"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
 
export const auth = betterAuth({
    emailAndPassword: {  
      enabled: true,
      autoSignIn: false
    },
    trustedOrigins: ["https://humble-fiesta-xgg69vp5v7v2pj45-3001.app.github.dev/"],
    database: drizzleAdapter(db, {
      provider: "pg", // or "pg" or "mysql"
      schema: {
        users,
        sessions,
        accounts,
        verifications,
      },
     usePlural: true
   })
})