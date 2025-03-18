"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import UsersTable from "./components/user-table";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/user");
        const data = await res.json();
        setUsers(data.users);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="container">
      <UsersTable users={users} />
      {/* <div className="card hero">
        <p className="text-display-1 hero-title">
          Let’s start authenticating <br /> with KindeAuth
        </p>
        <p className="text-body-1 hero-tagline">Configure your app</p>
        <Link
          href="https://kinde.com/docs/sdks/nextjs-sdk"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          Go to docs
        </Link>
      </div> */}
    </div>
  );
}
