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
    // const accessToken =
    //   "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzOjE2OmU2OjRkOmYwOjIwOmE3OjgyOjY3OjYwOjE2OmZkOjJiOjhlOjhiOjlmIiwidHlwIjoiSldUIn0.eyJhdWQiOlsiaHR0cHM6Ly95b2hhbm5lc21lc2F5LmtpbmRlLmNvbS9hcGkiXSwiYXpwIjoiMDA2MmRhODVhNjdkNDk2M2E0ZTQ3Zjg4OWFmYzQzZjgiLCJleHAiOjE3NDIzNjI4NzYsImd0eSI6WyJjbGllbnRfY3JlZGVudGlhbHMiXSwiaWF0IjoxNzQyMjc2NDc2LCJpc3MiOiJodHRwczovL3lvaGFubmVzbWVzYXkua2luZGUuY29tIiwianRpIjoiOWEzYzFmMjQtNzA3YS00OGY4LWIzODQtNzFlZjFmM2ZiOTEwIiwic2NvcGUiOiJjcmVhdGU6YXBpX2FwcGxpY2F0aW9uX3Njb3BlcyBjcmVhdGU6YXBpcyBjcmVhdGU6YXBpX3Njb3BlcyBjcmVhdGU6YXBwbGljYXRpb25fY29ubmVjdGlvbnMgY3JlYXRlOmFwcGxpY2F0aW9uX2xvZ291dF91cmlzIGNyZWF0ZTphcHBsaWNhdGlvbl9yZWRpcmVjdF91cmlzIGNyZWF0ZTphcHBsaWNhdGlvbnMgY3JlYXRlOmJpbGxpbmdfZW50aXRsZW1lbnRfY2hhbmdlX3JlcXVlc3RzIGNyZWF0ZTplbnZpcm9ubWVudF92YXJpYWJsZXMgY3JlYXRlOm1ldGVyX3VzYWdlIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOnVzZXJzIHJlYWQ6YmlsbGluZ19wYXltZW50X21ldGhvZHMgcmVhZDpvcmdhbml6YXRpb25zIHJlYWQ6dXNlcnMgcmVhZDp1c2VyX3Nlc3Npb25zIiwic2NwIjpbXSwidiI6IjIifQ.vbFMckNqTJFzNRd5xOOtPFtu0sfbaA1rdPAt4nmiJsv6qzQD5PWzLmVGhdDQbiyVQ6d1CyIUgEHl9CpujS9BMLsPD54IGFFgAY5jFWCWq9Fh4UWULLf1GXb_4m3xBAeGocRpXnBzqMCCN8GJVAuHYwsuHCYTjPQRRliCNz9nqlloWiFOGLP2KotW2y9C0txClaqaLyiJwOh7as_0YMOdaOAjGHiMild4VtvHgmN5tO-SQad6e0QfE_gmlnyXnR8tyflAvquU5QMFIsJ7ZkTw3CN_wMzLcMYD1LWRvubHUWaKbci2ympLU0Z5ROgXTeMavq_CBvt7o_G-sRuxuXSdUw";
    const accessToken = await getAccessToken();
    console.log("token", accessToken);
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const res = await fetch(
      "https://yohannesmesay.kinde.com/api/v1/users?page_size=1000",
      {
        method: "GET",
        headers,
      }
    );
    const data = await res.json();
    console.log("data", data);
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch users" });
  }
}
