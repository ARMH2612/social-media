import express from 'express';
import {getPosts} from '../controlers/posts.js'
import {createPost} from '../controlers/posts.js'

const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);

export default router;