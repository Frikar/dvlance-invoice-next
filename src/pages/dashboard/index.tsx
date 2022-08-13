import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <>
          <div>Dashboard</div>
          <div>Iniciaste sesión como {session.user.email}</div>
          <div>Eres un usuario {session.user.plan}</div>
          <button
            className="btn btn-primary"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign out
          </button>
        </>
      )}
    </>
  );
};

export default Dashboard;
