import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        <div>Signed in as {session.user.email}</div>
        <div>Eres un usuario {session.user.plan}</div>
        <button className="btn btn-primary" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button className="btn btn-primary" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};

export default Home;
