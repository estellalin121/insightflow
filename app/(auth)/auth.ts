export type UserType = "guest" | "regular";

export async function auth() {
  return {
    user: {
      id: "guest-user",
      email: "guest@insightflow.local",
      name: "Guest",
      type: "guest" as UserType,
    },
  };
}

export async function GET() {
  return Response.json({ ok: true });
}

export async function POST() {
  return Response.json({ ok: true });
}
