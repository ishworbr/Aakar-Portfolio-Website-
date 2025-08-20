import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import inquiriesRouter from './routes/inquiries.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));

// --- API routes ---
app.get('/health', (req, res) => res.send({ ok: true }));
app.use('/api/inquiries', inquiriesRouter);

// --- Serve React build in production ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// --- DB & Server startup ---
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Atlas URI or local
const DB_NAME = process.env.DB_NAME || 'aakar_portfolio';

mongoose
  .connect(MONGO_URI, { dbName: DB_NAME })
  .then(() => {
    console.log(`MongoDB connected to DB: ${DB_NAME}`);
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  })
  .catch(err => {
    console.error('Mongo error', err);
    process.exit(1);
  });
