import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

function UserCard({ user, pagetype }: Props) {
  const greeting = user?.name ? <div>Hello {user?.name}!</div> : null;

  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl mb-4 shadow-black rounded-full mx-auto mt-8"
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section>
      <div className="text-center text-4xl">{greeting}</div>
      {userImage}
      <p className="text-center">{pagetype} Page!</p>
    </section>
  );
}

export default UserCard;
