import express from 'express';
import { signUp, signIn, google, signOut, editPassword } from '../controllers/auth_controller.js';
const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google", google);
router.get("/signout", signOut);
router.post("/editpassword", editPassword);

export default router;