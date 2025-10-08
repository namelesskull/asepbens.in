//cSpell:disable

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Page from '../react/Page';
import Layout from '../react/Layout';
import { Request, Response } from 'express';

const prebuiltHtml =
  '<!DOCTYPE html>' +
  ReactDOMServer.renderToStaticMarkup(
    <Layout>
      <Page />
    </Layout>
  );

export const asciiText = `
  /$$$$$$                                      /$$$$$$$                                /$$          
 /$$__  $$                                    | $$__  $$                              |__/          
| $$  \ $$  /$$$$$$$  /$$$$$$   /$$$$$$       | $$  \ $$  /$$$$$$  /$$$$$$$   /$$$$$$$ /$$ /$$$$$$$ 
| $$$$$$$$ /$$_____/ /$$__  $$ /$$__  $$      | $$$$$$$  /$$__  $$| $$__  $$ /$$_____/| $$| $$__  $$
| $$__  $$|  $$$$$$ | $$$$$$$$| $$  \ $$      | $$__  $$| $$$$$$$$| $$  \ $$|  $$$$$$ | $$| $$  \ $$
| $$  | $$ \____  $$| $$_____/| $$  | $$      | $$  \ $$| $$_____/| $$  | $$ \____  $$| $$| $$  | $$
| $$  | $$ /$$$$$$$/|  $$$$$$$| $$$$$$$/      | $$$$$$$/|  $$$$$$$| $$  | $$ /$$$$$$$/| $$| $$  | $$
|__/  |__/|_______/  \_______/| $$____/       |_______/  \_______/|__/  |__/|_______/ |__/|__/  |__/
                              | $$                                                                  
                              | $$                                                                  
                              |__/                                                                  

`;

export const root = (req: Request, res: Response) => {
  if ((req as any).isCli) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(asciiText);
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(prebuiltHtml);
  }
};
