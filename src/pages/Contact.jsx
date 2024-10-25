// import images
import contactImage from '../img/contact/Contact1.png';
//import motion
import { motion } from 'framer-motion';
import { transition } from '../transitions/transitionsForPage';
import { CursorContext } from '../context/CursorContext';
import { useContext, useState } from 'react';

const Contact = () => {
  // Add motion
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  // Send customer information
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "7de5c645-fc0b-4ad9-ab04-aa66ddd06749");

    console.log(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult(`Your information has been sent to me. Thank you for your attention.`);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p>I would love to get suggestion from you.</p>
            {/* form */}
            <form
              onSubmit={onSubmit}
              className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  name='name'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your Name'
                  required />
                <input
                  name='email'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your email address'
                  required />
              </div>
              <input
                name='message'
                className='outline-none border-b border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
                required />
              <button
                type='submit'
                className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
              <span>{result}</span>
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
