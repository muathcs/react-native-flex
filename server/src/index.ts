import express, { Request, Response } from "express";
import cors from "cors";
import { User } from "./types";
import userRoute from "./router/users";

export const usersMemory: User[] = [];

function joinArrays(arr1?: number[], arr2?: number[]) {
  const result = arr1?.concat(arr2);
  //
  console.log(typeof result);
  return result;
}

joinArrays([2, 4, 5], [2, 5, 6]);

export const JWT_SECRET = "h7xK$9pL2!qW5eR8tY4uI1oP3aS6dF0gJ";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);

app.listen(3001, () => {
  console.log("Server is running on port 3001s");
});
