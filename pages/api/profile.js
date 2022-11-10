import { verify } from "jsonwebtoken";
export default async function profile(req, res) {
  const token = req.cookies;
  if (Object.entries(token).length > 0) {
    const { auth } = token;
    if (auth != "null") {
      const user = verify(auth, process.env.SECRET || "secret");
      if (user.logged) {
        return res.json({ logged: user.logged });
      }
    }
  }

  return res.json({ logged: false });
}
