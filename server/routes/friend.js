import express from 'express';
import { addFriend, friendProfile, removeFriend } from '../controller/friendProfile.js';


const router = express.Router();


router.post('/removefriend/:id/',removeFriend);
router.get('/:username',friendProfile);
router.post('/addfriend/:id/',addFriend);


export default router;