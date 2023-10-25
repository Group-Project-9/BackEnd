import express from 'express';
const router = express.Router();
import { addRecord, readRecord , userProfile , updateRecord , deleteRecord , deleteRecord2} from "../controllers/record_controller.js";

router.post("/add", addRecord);
router.get("/read", readRecord);
router.get("/userProfile" , userProfile );
router.put("/update", updateRecord);
router.delete("/delete", deleteRecord2);

export default router;