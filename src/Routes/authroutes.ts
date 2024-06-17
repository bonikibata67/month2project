import { Router } from "express";
import { loginUser, registerUser, welcomePage } from "../Controllers/authcontroller";
import { verifyToken } from "../Middlewares";

const authRoutes= Router()

authRoutes.post("/register", registerUser)
authRoutes.post("/login", loginUser)
authRoutes.get("",verifyToken, welcomePage)


export default authRoutes