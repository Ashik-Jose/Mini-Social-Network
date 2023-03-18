import express from 'express';
import multer from 'multer';
import path from 'path';

import { getSearchResults, profile, putPost, statusChange, updateProfilePic } from '../controller/profile.js';

const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null,path.join(path.dirname('__dirname'),'uploads'))
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//       },
//   })

//   const upload = multer({ storage: storage });

router.get('/search',getSearchResults);
router.get('/:id',profile);
router.post('/:id/putposts',putPost);
router.post('/:id/statuschange',statusChange);
router.post('/:id/updateprofilepic',updateProfilePic);


export default router;