// import images
import AboutVuImage from '../img/about/aboutVu.jpg';
//import motion
import { motion } from 'framer-motion';
import { transition } from '../transitions/transitionsForPage';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
 
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition}
      className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full
        items-center justify-center gap-x-24 text-center
        lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={AboutVuImage} alt=''>
            </img>
          </div>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='flex-1 pt-36 pd-14 lg:pt-0 lg:w-auto z-10 flex flex-col
          justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
              Hi, I'm Vu, <b>a photographer</b> specializing in <b>portrait and landscape photography</b>.
              I love capturing moments that tell a story and evoke emotion.
              With experience in both <b>portrait and landscape photography</b>,
              I aim to create visuals that connect with people and leave a lasting impression.
            </p>
            <Link to={'/portfolio'} className='btn mb-[30px]'>View my work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
