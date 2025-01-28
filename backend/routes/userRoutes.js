import express from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { 
    changePassword,
    getUser,
    updateUser,
 } from "../middleware,authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUser);
router.put("/change-password", authMiddleware, changePassword);
router.put("/", authMiddleware, updateUser);

export default router;