import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
      setIsFinished(true);
      return () => clearTimeout(timeout);
    }
  }, [text, speed, currentIndex]);

  return { text: displayText, isFinished };
};

export default useTypewriter;
