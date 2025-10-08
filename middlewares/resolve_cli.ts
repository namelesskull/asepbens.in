import { Request, Response, NextFunction } from 'express';

export const resolveCLI = (req: Request, res: Response, next: NextFunction) => {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const isCli =
    ua.includes('curl') || ua.includes('wget') || ua.includes('httpie');

  (req as any).isCli = isCli;
  next();
};
