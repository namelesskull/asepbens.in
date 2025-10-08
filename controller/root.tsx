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
 __    __   ______   __    __  ________   ______   __       
|  \  /  \ /      \ |  \  |  \|        \ /      \ |  \      
| $$ /  $$|  $$$$$$\| $$\ | $$ \$$$$$$$$|  $$$$$$\| $$      
| $$/  $$ | $$  | $$| $$$\| $$   | $$   | $$  | $$| $$      
| $$  $$  | $$  | $$| $$$$\ $$   | $$   | $$  | $$| $$      
| $$$$$\  | $$  | $$| $$\$$ $$   | $$   | $$  | $$| $$      
| $$ \$$\ | $$__/ $$| $$ \$$$$   | $$   | $$__/ $$| $$_____ 
| $$  \$$\ \$$    $$| $$  \$$$   | $$    \$$    $$| $$     \
 \$$   \$$  \$$$$$$  \$$   \$$    \$$     \$$$$$$  \$$$$$$$$
                                                            
                                                            
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
