import express from 'express';
import { profile, statusChange } from '../controller/profile.js';

const router = express.Router();

router.get('/:id',profile);
router.post('/:id/statuschange',statusChange);

export default router;