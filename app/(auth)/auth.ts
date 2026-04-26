export async function auth() {
  return {
    user: {
      id: "guest-user",
      email: "guest@insightflow.local",
      name: "Guest",
    },
  };
}

export const GET = async () => {
  return new Response("OK");
};

export const POST = async () => {
  return new Response("OK");
};
