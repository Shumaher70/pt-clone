import express from 'express';
import connectDB from './utils/connectDB.js';

import userRouter from './routes/user.route.js';
import pinRouter from './routes/user.route.js';
import commentRouter from './routes/user.route.js';
import boardRouter from './routes/user.route.js';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/pins', pinRouter);
app.use('/boards', boardRouter);
app.use('/comments', commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});
