// import images
import Image1 from '../img/portfolio/VuFoto1.png';
import Image2 from '../img/portfolio/VuFoto2.png';
import Image3 from '../img/portfolio/VuFoto3.png';
import Image4 from '../img/portfolio/VuFoto4.png';
//import motion
import { motion } from 'framer-motion';
import { transition } from '../transitions/transitionsForPage';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
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
         items-center justify-start gap-x-24 text-center
         lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Hi, I'm Vu, <b>a photographer</b> specializing in <b>portrait and landscape photography</b>.
              <br />
              Photography is my way of <b>exploring and telling</b> the world’s story through my personal lens.
              Each photo is not just <b>a moment captured</b>, but a deep connection with the subject and the emotions behind it.
              This portfolio gathers these journeys, where every frame is <b>a story and a fresh perspective</b> on life.
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>Here me</Link>
          </motion.div>
          {/* Images */}
          <div className=' grid grid-cols-2 lg:gap-2'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt=''>
              </img>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''>
              </img>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''>
              </img>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''>
              </img>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
