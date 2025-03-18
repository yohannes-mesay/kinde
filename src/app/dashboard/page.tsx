"use client";
import { useEffect, useState } from "react";
import UsersTable from "../components/user-table";
export default function Dashboard() {
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
      {/* <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          Your authentication is all sorted.
          <br />
          Build the important stuff.
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
      </section> */}
    </div>
  );
}
