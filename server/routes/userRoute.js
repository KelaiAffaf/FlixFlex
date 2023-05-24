import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  fetchLikedMovies,
  addToLikedMovies,
  removeFromLikedMovies
} from "../controllers/auth.js";
import verify from "../middlewares/verify.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for user management
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Invalid request payload
 */

router.post("/register", registerUser);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Log in as a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid request payload
 */

router.post("/login", loginUser);

// Add Swagger annotations for other routes similarly

export default router;
