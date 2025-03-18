import Image from "next/image";
import React from "react";

interface User {
  id: string;
  email: string;
  picture: string;
  full_name: string;
  created_on: string;
  last_signed_in: string;
  total_sign_ins: number;
  is_suspended: boolean;
}

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <div style={{ overflowX: "auto" }}>
        <h1>Users</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <th style={thStyle}>Picture</th>
            <th style={thStyle}>Full Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Created On</th>
            <th style={thStyle}>Last Signed In</th>
            <th style={thStyle}>Sign-ins</th>
            <th style={thStyle}>Suspended</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>
                <Image
                  src={user.picture}
                  width={20}
                  height={20}
                  alt={user.full_name}
                  //   style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </td>
              <td style={tdStyle}>{user.full_name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>
                {new Date(user.created_on).toLocaleDateString()}
              </td>
              <td style={tdStyle}>
                {new Date(user.last_signed_in).toLocaleDateString()}
              </td>
              <td style={tdStyle}>{user.total_sign_ins}</td>
              <td style={tdStyle}>{user.is_suspended ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: "10px",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

export default UsersTable;
