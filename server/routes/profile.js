import express from 'express';
import { addFriend, friendProfile } from '../controller/friendProfile.js';
import { getSearchResults, profile, statusChange } from '../controller/profile.js';

const router = express.Router();


router.get('/search',getSearchResults);
router.get('/:id',profile);
router.post('/:id/statuschange',statusChange);


export default router;