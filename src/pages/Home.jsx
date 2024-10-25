//import images
import ManImage from '../img/home/biaVu.png';
//import motion
import { motion } from 'framer-motion';
import { transition } from '../transitions/transitionsForPage';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className='section'>
      <div className='container mx-auto h-full relative'>
        {/* text & img */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='w-full pt-36 pd-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col
          justify-center items-center lg:items-start'>
            <h1 className='h1'>
              photographer <br /> & filmmaker
            </h1>
            <p className='text-[26px] lg:text-[36px] 
            font-primary mb-4 lg:mb-12'>
              HoChiMinh City, VietNam
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>
              here me
            </Link>
          </motion.div>
          {/* Image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition}
              className='relative lg:-right-40 overflow-hidden'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition}
                src={ManImage}
                alt='' />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
