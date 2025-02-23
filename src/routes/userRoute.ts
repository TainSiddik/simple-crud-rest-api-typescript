import express from "express"
import { createData, getAllUser, detailUser, editlUser, deleteUser } from "../controllers/userController"

const router = express.Router();

router.post('/user', createData)
router.get('/user', getAllUser)
router.get('/user/:id', detailUser)
router.patch('/user/:id', editlUser)
router.delete('/user/:id', deleteUser)

export default router