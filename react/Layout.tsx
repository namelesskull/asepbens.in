import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <html lang='en'>
    <head>
      <title>asepbens.in</title>
    </head>
    <body>{children}</body>
  </html>
);

export default Layout;
