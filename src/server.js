import express from 'express';
import cors from 'cors';
import pino from 'pino';
import { getAllContacts } from './controllers/contactController.js';

export function setupServer() {
  const app = express();
  const logger = pino();


  app.use(cors());
  app.use(express.json());

app.get('/contacts', getAllContacts);


  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });


  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
}





