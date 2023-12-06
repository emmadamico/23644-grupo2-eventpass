import { Router } from "express";
import {
  getUsers,
  login,
  register,
  deleteUser,
} from "../controllers/Auth.controller.js";
import {
  bodyLoginValidator,
  bodyRegisterValidator,
  bodyDeleteUserValidator,
} from "../middlewares/ValidatorManager.js";

const router = Router();
router.get("/", getUsers);

router.post("/register", bodyRegisterValidator, register);

router.post("/login", bodyLoginValidator, login);

router.delete("/deleteUser", bodyDeleteUserValidator, deleteUser);

export default router;
