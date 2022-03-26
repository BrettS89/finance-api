require('dotenv').config();
import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI!);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
