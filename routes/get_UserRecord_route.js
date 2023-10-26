import express from 'express';
import { getUserRecord, updateUserRecord, deleteUserRecord, updateUserInfo } from '../controllers/get_userRecord.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/user_record", verifyToken, getUserRecord);
router.put("/user_update_record/:id", verifyToken, updateUserRecord);
router.delete("/user_delete_Record", verifyToken, deleteUserRecord);
router.post("/update_user_info/:id", verifyToken, updateUserInfo);

// router.get("/user_record", getUserRecord);
// router.put("/user_update_record/:id", updateUserRecord);
// router.delete("/user_delete_Record", deleteUserRecord);
// router.post("/update_user_info/:id", updateUserInfo);

export default router;