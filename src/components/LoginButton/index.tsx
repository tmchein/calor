import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data, status } = useSession();
  const { user } = data || {};

  async function handleLogin() {
    try {
      await signIn("discord", { callbackUrl: "/" });
    } catch (error) {
      console.log("Ostras, un error", error);
    }
  }

  async function handleSignOut() {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.log("Ostras, un error", error);
    }
  }

  if (user === undefined && status === "loading") return <div />;

  if (user != null) {
    return (
      <button
        onClick={handleSignOut}
        className="bg-gray-50 hover:bg-gray-200 text-gray-900 font-bold py-1 px-4
          transition-colors duration-300 rounded-lg flex gap-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-6 h-6 rounded-full"
          src={user?.image || undefined}
          alt={`${user.name} profile picture`}
        />
        <span>{user.name}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-[#5865F2] text-white hover:bg-gray-200 hover:text-gray-900 font-bold py-1 px-4
      transition-colors duration-300 rounded-lg"
    >
      Login with Discord
    </button>
  );
}
