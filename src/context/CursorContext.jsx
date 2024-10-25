import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const CursorContext = createContext('');

const CursorProvider = ({ children }) => {
  // Cursor position state
  const [cursorPos, setCurSorPos] = useState({
    x: 0,
    y: 0
  });

  // Cursor bg state
  const [cursorBG, setCurSorBG] = useState('default');

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCurSorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener('mousemove', move);
      return () => {
        window.removeEventListener('mousemove', move);
      }
    }
    else {
      setCurSorBG('none');
    }
  });

  // Cursor variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  };

  // Mouse enter handle
  const mouseEnterHandler = () => {
    setCurSorBG('text');
  };

  // Mouse leaver handle
  const mouseLeaverHandler = () => {
    setCurSorBG('default');
  };

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaverHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

CursorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CursorProvider;