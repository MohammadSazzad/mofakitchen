import { createRecipeImageController } from "../controller/recipe.js";
import express from 'express';
import { upload } from "../auth/multer.js";

const recipeRouter = express.Router();

recipeRouter.post('/create/:id', upload.single('file') ,createRecipeImageController);

export default recipeRouter; 