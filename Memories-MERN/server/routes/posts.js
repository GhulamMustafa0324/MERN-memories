import express from "express";
import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// seen ye h yaha pr hum ne / daal dia lkn index me jaa k me ise post ka prefix dunga jis se URl me /posts kr
// k aega ye

//doosra seen ye k hum logics ko functions banadenge taa k hame aasani rahe aur neat code rahe

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.patch('/:id/likePost', auth, likePost)
router.delete("/:id", auth, deletePost);

export default router;
