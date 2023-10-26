import express from 'express';
const router = express.Router();
import { activityUpdate , addRecord, readRecord , userProfile , updateRecord , deleteRecord , deleteRecord2} from "../controllers/record_controller.js";
import { verifyToken } from '../utils/verifyUser.js';


router.post("/add", verifyToken, addRecord);
router.get("/read", verifyToken, readRecord);
router.get("/userProfile" , verifyToken, userProfile );
router.put("/update", verifyToken, updateRecord);
router.put("/utest", verifyToken, activityUpdate)
router.delete("/delete", verifyToken, deleteRecord2);

export default router;