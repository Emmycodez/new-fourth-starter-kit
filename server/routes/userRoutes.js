import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

router.post("/api/createUser", async (request, response) => {
  console.log(request.body);
});

export default router;
