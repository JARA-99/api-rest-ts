import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import db from './config/mongo';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db().then(() => console.log('Connection is redy!!!'));

app.listen(PORT, () => console.log(`Todo listo en el puerto: ${PORT} [ºmº]`));
