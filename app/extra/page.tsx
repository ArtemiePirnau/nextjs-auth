"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import UserCard from "../components/UserCard";
function ExtraPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/extra");
    },
  });
  return (
    <section>
      <UserCard user={session?.user} pagetype="Extra" />
    </section>
  );
}

export default ExtraPage;
