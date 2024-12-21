// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// API Routes
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        // Generate content using Gemini API
        const result = await model.generateContent(`Suggest a ${message} recipe with ingredients and instructions.`);
        
        res.json({ recipe: result.response.text() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
