import { connect, connection } from "mongoose";

const conn = {
  isConected: false,
};
export const dbConnect = async () => {
  if (conn.isConected) return;
  const db = await connect(process.env.MONGOBD_URL);
  conn.isConected = db.connections[0].readyState;
};
connection.on("connected", () => {
  console.log("Base de datos conectada");
});
connection.on("error", (err) => {
  console.log(err);
});
