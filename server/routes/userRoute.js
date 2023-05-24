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

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid request payload
 *       404:
 *         description: User not found
 */

router.put("/:id", verify, updateUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */

router.delete("/:id", verify, deleteUser);

/**
 * @swagger
 * /user/find/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User found successfully
 *       404:
 *         description: User not found
 */

router.get("/find/:id", verify, getUser)

/**
 * @swagger
 * /user/getAll:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *       404:
 *         description: Users not found
 */

 router.get("/getAll", verify, getAllUsers);

 /**
  * @swagger
  * /user/likedMovies/{email}:
  *   get:
  *     summary: Get liked movies by user email
  *     tags: [Users]
  *     parameters:
  *       - in: path
  *         name: email
  *         required: true
  *         schema:
  *           type: string
  *         description: User email
  *     responses:
  *       200:
  *         description: List of liked movies
  *       404:
  *         description: User not found or no liked movies
  */
 
 router.get("/likedMovies/:email", fetchLikedMovies);
 
 /**
  * @swagger
  * /user/add/movie:
  *   post:
  *     summary: Add a movie to liked movies
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
  *               movieId:
  *                 type: string
  *     responses:
  *       200:
  *         description: Movie added to liked movies successfully
  *       400:
  *         description: Invalid request payload
  *       404:
  *         description: User not found
  */
 
 router.post("/add/movie", addToLikedMovies);
 
 /**
  * @swagger
  * /user/remove/movie:
  *   put:
  *     summary: Remove a movie from liked movies
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
  *               movieId:
  *                 type: string
  *     responses:
  *       200:
  *         description: Movie removed from liked movies successfully
  *       400:
  *         description: Invalid request payload
  *       404:
  *         description: User not found or movie not found in liked movies
  */
 
 router.put("/remove/movie", removeFromLikedMovies);
 
 export default router;
 

