import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      role: string;
      email: string;
      name: string;
      accountType: String;
      employmentType: string;
      token: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role: string;
    employmentType: string;
    accountType: String;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    employmentType: string;
    accountType: String;
    address: string;
    token: string;
  }
}
