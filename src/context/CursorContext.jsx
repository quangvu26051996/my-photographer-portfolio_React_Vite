import { createContext } from 'react';

export const CursorContext = createContext('');

const CursorProvider = ({ children }) => {
  return (
    <CursorContext.Provider value={'this is the cursor context'}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;