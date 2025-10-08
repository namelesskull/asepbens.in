import express from 'express';
import path from 'path';
import { resolveCLI } from './middlewares/resolve_cli';
import { root } from './controller/root';

const app = express();
const PORT = 8123;

app.get('/globals.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'globals.css'), {
    headers: { 'Content-Type': 'text/css' },
  });
});

app.use(resolveCLI);
app.get('/', root);
app.listen(PORT, () => {
  console.log(`:${PORT}`);
});
