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

// app.get('/client.js', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'client.js'), {
//     headers: { 'Content-Type': 'text/javascript' },
//   });
// });

app.use(
  express.static(path.join(__dirname, 'client'), {
    extensions: ['js'],
    maxAge: '1h',
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    },
  })
);

app.use(resolveCLI);
app.get('/', root);
app.listen(PORT, () => {
  console.log(`:${PORT}`);
});
