import { serialize } from "cookie";
const daysToExpire = (cant) => {
  return Math.floor(Date.now() / 1000) + 60 * 60 * 24 * cant;
};
export default async function Logout(req, res) {
  const { auth } = req.cookies;
  if (!auth) return res.json("Algo anda mal...");
  const serialized = serialize("auth", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: daysToExpire(10),
    path: "/",
  });
  res.setHeader("Set-Cookie", serialized);
  return res.json({ logged: false });
}
