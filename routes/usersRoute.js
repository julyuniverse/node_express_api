import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/usersController.js";

const router = express.Router();

router.get('/', getUsers) // 모든 유저 출력(get) http://localhost:5000/users
router.post('/', createUser) // 유저 생성(post) http://localhost:5000/users
router.get('/:id', getUser) // 유저 출력(get) http://localhost:5000/users/:id
router.delete('/:id', deleteUser) // 유저 삭제(delete) http://localhost:5000/users/:id
router.patch('/:id', updateUser) // 유저 수정(patch) http://localhost:5000/users/:id

export default router;