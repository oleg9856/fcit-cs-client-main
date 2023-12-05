export const checkAdminSession = async () => {
  const res = await fetch("https://fcit-cs-server.vercel.app/api/admin/login", {
    credentials: "include",
  });
  return res.status === 200;
}
