import express from 'express';
import { addFriend, deletePosts, friendProfile, removeFriend, updateLikes } from '../controller/friendProfile.js';


const router = express.Router();

router.post('/updatelikes/:id',updateLikes);
router.post('/deleteposts/:id',deletePosts);
router.post('/removefriend/:id/',removeFriend);
router.get('/:username',friendProfile);
router.post('/addfriend/:id/',addFriend);


export default router;