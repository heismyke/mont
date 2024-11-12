// src/server/index.ts
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Create/Update form
app.post('/api/forms', async (req, res) => {
  try {
    const { id, formState } = req.body;
    
    const result = await prisma.form.upsert({
      where: {
        id: id,
      },
      update: {
        formState,
        updatedAt: new Date(),
      },
      create: {
        id: id,
        formState,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    res.json(result);
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).json({ error: 'Failed to save form' });
  }
});

// Get form by ID
app.get('/api/forms/:id', async (req: express.Request<{ id: string }, any, any>, res: express.Response) => {
  try {
    const { id } = req.params;
    
    const form = await prisma.form.findUnique({
      where: {
        id: String(id),
      },
    });

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    res.json(form);
  } catch (error) {
    console.error('Error fetching form:', error);
    res.status(500).json({ error: 'Failed to fetch form' });
  }
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});