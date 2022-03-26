import { Router } from 'express';
import Expense from '../models/expense';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense
    .find()
    .sort({ price: -1 });

    res.status(200).json(expenses);
  } catch(e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: 'an unknown error occured' });
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch(e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: 'an unknown error occured' });
    }  
  }
});

router.delete('/:_id', async (req, res) => {
  try {
    const deleted = await Expense.findByIdAndDelete(req.params._id);
    res.status(200).json(deleted);
  } catch(e) {
    if (e instanceof Error) {
      res.status(500).json({ error: e.message });
    } else {
      res.status(500).json({ error: 'an unknown error occured' });
    }  
  }
});

export default router;
