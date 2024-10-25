import { Link } from 'react-router-dom';
// import image
import Logo from '../img/header/VuFoto_Dark.png';
// import components
import Social from './Socials';
import MobileNav from './MobileNav';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[20px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/*logo*/}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          to={'/'} className='max-w-[110px]'>
          <img src={Logo} alt=''>
          </img>
        </Link>
        {/*nav - show on desktop mode*/}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='hidden xl:flex gap-x-12
        font-semibold'>
          <Link
            to={'/'} className='text-[#696c6d]
          hover:text-primary transition'>
            Home
          </Link>
          <Link to={'/about'} className='text-[#696c6d]
          hover:text-primary transition'>
            About
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d]
          hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d]
          hover:text-primary transition'>
            Contact
          </Link>
        </nav>
      </div>
      {/*Socials*/}
      <Social />
      {/*nav - show on mobile mode*/}
      <MobileNav />
    </header>
  );
};

export default Header;
