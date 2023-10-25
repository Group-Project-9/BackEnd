import express from 'express';
import { getUserRecord, updateUserRecord, deleteUserRecord, updateUserInfo } from '../controllers/get_userRecord.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/user_record", getUserRecord);
router.get("/user_update_record", updateUserRecord);
router.delete("/user_delete_Record", deleteUserRecord);
router.post("/update_user_info/:id", verifyToken,updateUserInfo);

export default router;