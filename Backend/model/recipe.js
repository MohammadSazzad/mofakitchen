import { pool } from '../config/db.js';

export const createRecipeImage = async (id, image_url) => {
  const [results] = await pool.query('INSERT INTO recipes (id, image_url) VALUES(?, ?)', [id, image_url]);
  return results;
};
