import express from 'express';
import { getUserRecord, deleteUserRecord, updateUserInfo } from '../controllers/get_userRecord.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/user_record", getUserRecord);
router.delete("/user_delete_Record", deleteUserRecord);
router.post("/update_user_info/:id", verifyToken,updateUserInfo);

export default router;