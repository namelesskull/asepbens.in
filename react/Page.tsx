// cSpell:disable
import React, { useState, useEffect } from 'react';
import Header from './components/common/header';
import ansiToHTML from './libs/ansi_to_html';
import { about_me, asep_bensin_image } from '../ansi/ansi';
import useTypewriter from './libs/use_type_writter';

const txt = asep_bensin_image + about_me;

const Page: React.FC = () => {
  const fullCommand = 'curl asepbens.in';
  const typedText = useTypewriter(fullCommand, 100);

  return (
    <div className='justify-center items-center w-full h-screen space-y-2'>
      <Header text='Home' />
      <h1 className='underline text-white'>asepbens.in</h1>
      <div className='p-2 border border-white'>
        <div className='inline-block overflow-hidden h-[70vh]'>
          <div className='font-mono text-green-400'>
            <span className='text-green-400'>$ </span>
            <span>{typedText}</span>
            <span className='animate-pulse'>█</span>
          </div>
          <div
            className='scale-50 origin-top-left terminal'
            dangerouslySetInnerHTML={{ __html: ansiToHTML(txt) }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
