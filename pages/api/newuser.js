import { dbConnect } from "../../utils/mongodb";
import UserModel from "../../models/user";

const createUser = async (body) => {
  const { firstName, lastName, password, email } = body;
  const newUser = {
    firstName,
    lastName,
    password,
    email,
    username: `${firstName[0].toUpperCase()} ${lastName[0].toUpperCase()}`,
    role: 1,
  };
  const errors = [];
  const alreadyExist = await UserModel.find(
    { email: newUser.email },
    "email"
  ).exec();
  if (!alreadyExist.length > 0) {
    const result = await UserModel.create(newUser).catch((err) =>
      console.log(err)
    );
    if (Object.entries(result).length > 0) {
      return {
        isCreated: true,
      };
    } else {
      return {
        isCreated: false,
        errors: "No se pudo guardar su usuario",
      };
    }
  } else {
    return {
      isCreated: false,
      errors: `Usuario ${alreadyExist[0].email} ya existe`,
    };
  }
};

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      const response = await createUser(JSON.parse(body));
      res.status(200).json(response);
      break;
    case "GET":
      res.status(200).send("Usando GET");
      break;
    default:
      res.status(200).send("Acceso denegado");
      break;
  }
}
