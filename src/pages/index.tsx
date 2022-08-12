import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Base/Navbar";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Navbar />
        <div>Signed in as {session.user.email}</div>
        <div>Eres un usuario {session.user.plan}</div>
      </>
    );
  }
  return (
    <>
    <Navbar/>
      <div>No estas logeado</div>
    </>
  );
};

export default Home;
