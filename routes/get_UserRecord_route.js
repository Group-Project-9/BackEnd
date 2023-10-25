import express from 'express';
import { getUserRecord, deleteUserRecord, updateUserRecord} from '../controllers/get_userRecord.js';

const router = express.Router();

router.get("/user_record", getUserRecord);
router.get("/user_deleteRecord", deleteUserRecord);
router.patch("/user_updateRecord", updateUserRecord);

export default router;