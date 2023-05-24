import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - userName
 *         - email
 *         - password
 *       properties:
 *         userName:
 *           type: string
 *           description: The username of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *         isAdmin:
 *           type: boolean
 *           description: Indicates if the user is an admin.
 *         likedMovies:
 *           type: array
 *           description: An array of liked movies.
 *       example:
 *         userName: john_doe
 *         email: john.doe@example.com
 *         password: password123
 *         isAdmin: false
 *         likedMovies: []
 */

const UserSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    likedMovies: Array
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema)
