import express from 'express';
import { resolveCLI } from './middlewares/resolve_cli';
import { root } from './controller/root';
import { resolve } from 'path';

const app = express();
const PORT = 8123;
app.use(resolveCLI);

app.get('/', root);
app.use(express.static(resolve(__dirname, './html')));
app.listen(PORT, () => {
  console.log(`:${PORT}`);
});
