//cSpell:disable

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Page from '../react/Page';
import Layout from '../react/Layout';
import { Request, Response } from 'express';
import { about_me, asep_bensin_image } from '../ansi/ansi';

const prebuiltHtml =
  '<!DOCTYPE html>' +
  ReactDOMServer.renderToStaticMarkup(
    <Layout>
      <Page />
    </Layout>
  );

const str_result = asep_bensin_image + about_me;

export const root = (req: Request, res: Response) => {
  if ((req as any).isCli) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(str_result);
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(prebuiltHtml);
  }
};
