import express from 'express';
import { resolveCLI } from './middlewares/resolve_cli';
import { root } from './controller/root';

const app = express();
const PORT = 3000;

app.use(resolveCLI);

app.get('/', root);

app.listen(PORT, () => {
  console.log(`:${PORT}`);
});
