import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userSchema";
import { Request, Response } from "express";
import generateToken from "../middleware/genrateToken";

const registerUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { email, userName, password } = req.body;
    try {
      const isEmailExist = await userModel.findOne({ email });
      const isUsernameExist = await userModel.findOne({ userName });
      if (isEmailExist) {
        return res.status(401).send("Email already exist");
      }
      if (isUsernameExist) {
        return res.status(401).send("userName already exist");
      }

      const newUser = await userModel.create({ email, userName, password });

      if (newUser) {
        return res.status(200).json(newUser);
      }
    } catch (error: any) {
      return res.status(500).send(error.message);
    }
  }
);

const loginUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });

      if (user && (await user.comparePassword(password))) {
        res.status(200).json({
          token: await generateToken(user._id),
        });
      } else {
        res.status(401).send("Invalid email or password");
      }
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
);

export { registerUser, loginUser };
