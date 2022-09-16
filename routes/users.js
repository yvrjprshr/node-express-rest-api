import express from 'express';
import { addUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js';

const router = express.Router();

let users = []

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router;
