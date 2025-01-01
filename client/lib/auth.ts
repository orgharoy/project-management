import { betterAuth } from "better-auth";
import { db } from "./db/drizzle";
import { users, sessions, accounts, verifications } from "./db/schema"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
 
export const auth = betterAuth({
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