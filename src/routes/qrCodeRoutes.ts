import express from "express";
import {
  generatedQrCode,
  matchQrOfUser,
} from "../controllers/QrCodeController";
const router = express.Router();

router.get("/generate", generatedQrCode);
router.post("/match", matchQrOfUser);

export const qrCodeRoutes = router;
