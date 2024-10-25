import { BrowserRouter as Router } from 'react-router-dom';
import { useContext } from 'react';
// import Components
import AnimRoutes from './components/AnimRoutes';
import Header from './components/Header';
import { CursorContext } from './context/CursorContext';
import { motion } from 'framer-motion';

function App() {
  // Get Context of CursorProvider
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className='w-[32px] h-[32px] bg-primary fixed
        top-0 left-0 pointer-events-none z-50 rounded-full'>
      </motion.div>
    </>
  )
}

export default App
