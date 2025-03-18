import React from "react";

interface Organization {
  code: string;
  name: string;
  handle: string | null;
  created_on: string;
  is_default: boolean;
  external_id: string | null;
  is_auto_membership_enabled: boolean;
}

interface OrganizationsTableProps {
  organizations: Organization[];
}

const thStyle: React.CSSProperties = {
  padding: "10px",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

const OrganizationsTable: React.FC<OrganizationsTableProps> = ({ organizations }) => {
  return (
    <div style={{ overflowX: "auto", marginTop: "40px" }}>
        <h1>Organizations</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <th style={thStyle}>Code</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Handle</th>
            <th style={thStyle}>Created On</th>
            <th style={thStyle}>Default?</th>
            <th style={thStyle}>External ID</th>
            <th style={thStyle}>Auto Membership?</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.code} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{org.code}</td>
              <td style={tdStyle}>{org.name}</td>
              <td style={tdStyle}>{org.handle || "—"}</td>
              <td style={tdStyle}>
                {new Date(org.created_on).toLocaleString()}
              </td>
              <td style={tdStyle}>{org.is_default ? "Yes" : "No"}</td>
              <td style={tdStyle}>{org.external_id || "—"}</td>
              <td style={tdStyle}>
                {org.is_auto_membership_enabled ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizationsTable;
