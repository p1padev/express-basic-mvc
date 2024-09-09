import express from 'express';
import path from 'path';
import indexRouter from '../routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;
const assetsPath = path.join(process.cwd(), 'public');

app.set('view engine', 'ejs');
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('Listening on ' + PORT);
});
