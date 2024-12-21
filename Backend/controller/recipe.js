import { createRecipeImage } from "../model/recipe.js";
import fs from 'fs';
import path from 'path';

export const createRecipeImageController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const localFilePath = req.file.path;
    const metadataFilePath = path.join(
      path.dirname(localFilePath),
      `${path.basename(localFilePath, path.extname(localFilePath))}.json`
    );

    const metadata = {
      recipeId: id,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
      uploadDate: new Date().toISOString(),
    };

    fs.writeFileSync(metadataFilePath, JSON.stringify(metadata, null, 2));

    
    const results = await createRecipeImage(id, localFilePath);

    res.status(201).json({
      success: true,
      message: 'Image and metadata saved successfully',
      data: { results, metadata },
    });
  } catch (error) {
    console.error('Error uploading image:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
