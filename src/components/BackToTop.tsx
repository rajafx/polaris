// src/components/BackToTop.tsx
'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-sm" />
        </button>
      )}
    </>
  );
};

export default BackToTop;