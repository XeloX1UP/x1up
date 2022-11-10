import { dbConnect } from "../../utils/mongodb";
import UserModel from "../../models/user";

const createUser = async (body) => {
  const { username, password } = body;
  const errors = [];
  const result = UserModel.create(body);
  if (result.length > 0) {
    return {
      isCreated: true,
      result,
    };
  } else {
    return {
      isCreated: false,
      errors,
    };
  }
};

export default function handler(NextApiRequest, NextApiResponse) {
  const { method, body } = NextApiRequest;

  switch (method) {
    case "POST":
      const response = createUser(body);
      NextApiResponse.status(200).json(response);
      break;
    case "GET":
      NextApiResponse.status(200).send("Usando GET");
      break;
    default:
      NextApiResponse.status(200).send("Acceso denegado");
      break;
  }
}
