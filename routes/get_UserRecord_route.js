import express from 'express';
import { getUserRecord, deleteUserRecord, updateUserRecord } from '../controllers/get_userRecord.js';

const router = express.Router();

router.get("/user_record", getUserRecord);
router.delete("/user_delete_Record", deleteUserRecord);
router.patch("/user_update_Record", updateUserRecord);

export default router;