import Express from "express";
import { getAllProjects, getProjectById, getUserCredits, toggleProjectPublic } from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";

const userRoutes = Express.Router();

userRoutes.get("/credits", protect, getUserCredits)
userRoutes.get("/projects", protect, getAllProjects)
userRoutes.get("/projects/:projectId", protect, getProjectById)
userRoutes.get("/publish/:projectId", protect, toggleProjectPublic)

export default userRoutes;