// This file contains all the routes that have to do someting with posts
import express from "express";
import { getPosts } from "../controllers/posts.js";

// Make a router object
const router = express.Router();

// Responce to get request to test
router.get('/', getPosts);

export default router;
