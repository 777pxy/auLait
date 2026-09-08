import { signIn } from "@/auth";

export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="hover:cursor-alias" type="submit">
        Sign in with Google
      </button>
    </form>
  );
}
