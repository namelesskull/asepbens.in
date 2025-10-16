import { Request, Response } from 'express';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { about_me, asep_bensin_image } from '../ansi/ansi';

const str_result = asep_bensin_image + about_me;
const indexHtmlPath = resolve(__dirname, '../html/index.html');

export const root = async (req: Request, res: Response) => {
  if ((req as any).isCli) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(str_result);
  } else {
    try {
      const html = await readFile(indexHtmlPath, 'utf-8');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(html);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
};
