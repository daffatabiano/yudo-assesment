import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
