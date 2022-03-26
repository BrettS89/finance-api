import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import expenseRoutes from './routes/expense';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/expense', expenseRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'You found the finance api.',
  });
});

export default app;
