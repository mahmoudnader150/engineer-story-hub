
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className={`fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 
      ${theme === 'dark' ? 'bg-white/30' : 'bg-black/30'}
      transition-all duration-100 ease-out`}
      style={{
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        width: '20px', 
        height: '20px'
      }}
    />
  );
};

export default CustomCursor;
