import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <html lang='en'>
    <head>
      <title>asepbens.in</title>
      <link href='/globals.css' rel='stylesheet'></link>
    </head>
    <body className='bg-black text-white flex justify-center'>
      <main id='root' className='w-full max-w-4xl'>
        {children}
      </main>
      <script type='module' src='/client.js'></script>
    </body>
  </html>
);

export default Layout;
