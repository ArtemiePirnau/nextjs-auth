import { redirect } from "next/navigation";
import UserCard from "../components/UserCard";
import { authOptions } from "../api/auth/[...nextauth]/[...nextauth]";
import { getServerSession } from "next-auth/next";
async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <section>
      <UserCard user={session?.user} pagetype="Server" />
    </section>
  );
}

export default page;

// TODO: MI a ramas sa fac pagina server, client, signin
