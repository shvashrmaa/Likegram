import jwt, { JwtPayload } from "jsonwebtoken";

const generateToken = async (id: JwtPayload): Promise<string> => {
  const token = await jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

export default generateToken;
