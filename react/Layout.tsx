import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <html lang='en'>
    <head>
      <title>asepbens.in</title>
      <link href='/globals.css' rel='stylesheet'></link>
    </head>
    <body className='bg-black text-white flex justify-center'>
      <main className='bg-red-500 w-[40vw]'>{children}</main>
    </body>
  </html>
);

export default Layout;
