import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"
import {prisma} from "@repo/db";

const handler  = NextAuth({
  providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
    }),
      GitHubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
  })

  ],
  secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      jwt: async ({ user, token }: any) => {
	      if (user) {
	          token.uid = user.id;
            token.name = token.name;
            token.email = token.email;
	      }
	      return token;
      },
    session: async ({ session, token, user }: any) => {
        if (token) {
            session.user.id = token.uid
            session.user.name = token.name;
            session.user.email = token.email;
        }
          try {
            const response = await prisma.user.findUnique({
               where: {
                email:session.user.email
               }
            })

            if (!response) {
              const user = await prisma.user.create({
                data:{
                  name:session.user.name,
                  email:session.user.email,
                }
              })
            }
          } catch (error) {
            console.log({"error" : error});
          }

        return session
    }
  },
})


export { handler as GET, handler as POST }