import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  userName: string;
  email: string;
  password: string;
  profilePic: string;
  bio: string;
  followers: String[];
  following: String[];
  Posts: string[];
  authProvider: String;
  IsVerified: Boolean;
  ProviderId: String;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    bio: { type: String },
    followers: { type: [String] },
    following: { type: [String] },
    Posts: { type: [String] },
    authProvider: { type: String },
    IsVerified: { type: Boolean },
    ProviderId: { type: String },
  },
  {
    timestamps: true,
  }
);

interface IUserModel extends IUser {}

userSchema.pre("save", async function (next): Promise<void> {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
  } catch (error: any) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  try {
    const matchedPassword = await bcrypt.compare(password, this.password);
    return matchedPassword;
  } catch (error) {
    return false;
  }
};

const userModel = mongoose.model<IUserModel>("User", userSchema);

export default userModel;
