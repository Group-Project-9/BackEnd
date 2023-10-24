import express from 'express';
const router = express.Router();
import { addRecord, readRecord ,deleteRecord  } from "../controllers/record_controller.js";

router.post("/add", addRecord);
router.get("/read", readRecord);
router.delete("/delete/:id", deleteRecord);


export default router;