import { NextResponse } from "next/server";

const getAccessToken = async () => {
  try {
    const searchParams = {
      grant_type: "client_credentials",
      client_id: "0062da85a67d4963a4e47f889afc43f8",
      client_secret: "QzKMS1ZZu9CJ06nM0ZoZ12WpN9R3FX4IENWIgdVx1cSv4eK4ftu",
      audience: "https://yohannesmesay.kinde.com/api",
    };

    const res = await fetch("https://yohannesmesay.kinde.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(searchParams),
    });
    const token = await res.json();
    return token.access_token;
  } catch (err) {
    console.error(err);
  }
};

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    const [usersRes, orgsRes] = await Promise.all([
      fetch("https://yohannesmesay.kinde.com/api/v1/users?page_size=1000", {
        method: "GET",
        headers,
      }),
      fetch("https://yohannesmesay.kinde.com/api/v1/organizations", {
        method: "GET",
        headers,
      }),
    ]);

    const [usersData, orgsData] = await Promise.all([
      usersRes.json(),
      orgsRes.json(),
    ]);

    return NextResponse.json({
      users: usersData,
      organizations: orgsData,
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json({
      error: "Failed to fetch users or organizations",
    });
  }
}
