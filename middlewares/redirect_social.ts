import { Request, Response, NextFunction } from 'express';

const redirects: Record<string, string> = {
  '/instagram': 'https://www.instagram.com/khaqulhudaa_/',
  '/linkedin': 'https://id.linkedin.com/in/khaqul-huda',
  '/facebook': 'https://www.facebook.com/khaqul.persie/',
  '/email': 'mailto:khaqulhudaa@gmail.com',
  '/github': 'https://github.com/namelesskull',
};

export const socialRedirect = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const targetUrl = redirects[req.path];
  if (targetUrl) {
    return res.redirect(301, targetUrl);
  }

  next();
};
