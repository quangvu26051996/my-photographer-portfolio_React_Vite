import { BrowserRouter as Router } from 'react-router-dom';

// import Components
import AnimRoutes from './components/AnimRoutes';
import Header from './components/Header';
import CursorProvider from './context/CursorContext';

function App() {

  return (
    <>
      <CursorProvider>
        <Router>
          <Header />
          <AnimRoutes />
        </Router>
        <div className='w-[32px] h-[32px] bg-primary fixed
        top-0 left-0 pointer-events-none z-50'></div>
      </CursorProvider>
    </>
  )
}

export default App
