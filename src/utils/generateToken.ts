import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in environment variables");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1hr" });
};

export default generateToken;
