// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// API Routes
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful cooking assistant. Provide recipes with ingredients and step-by-step instructions."
                },
                {
                    role: "user",
                    content: `Suggest a ${message} recipe with ingredients and instructions.`
                }
            ],
            max_tokens: 500
        });

        res.json({ recipe: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
