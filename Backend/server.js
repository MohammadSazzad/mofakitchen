import express from 'express';
import dotenv from 'dotenv';
import userRouter from './route/users.js';
import userPreferenceRouter from './route/userPreference.js';
import recipeRouter from './route/recipe.js';

dotenv.config();

const app = express();

app.use('/api/users', userRouter);
app.use('/api/userPreference', userPreferenceRouter);
app.use('/api/recipe', recipeRouter);

const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

