// import images
import contactImage from '../img/contact/Contact1.png';
//import motion
import { motion } from 'framer-motion';
import { transition } from '../transitions/transitionsForPage';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition}
      className='section'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full
        items-center justify-start pt-36 gap-x-8 text-center
        lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-96 -z-10'>
          </motion.div>
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p>I would love to get suggestion from you.</p>
            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your Name' />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your email address' />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Your message' />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
            </form>
          </div>
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition, duration: 1.5 }}
            className='lg:flex-1'>
            <img src={contactImage} alt='' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
