import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"

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
	      }
	      return token;
      },
    session: ({ session, token, user }: any) => {
        if (session.user) {
            session.user.id = token.uid
        }
        return session
    }
  },
})


export { handler as GET, handler as POST }