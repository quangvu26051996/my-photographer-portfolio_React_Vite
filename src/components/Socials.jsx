// import icon
import { FaTiktok } from 'react-icons/fa';
import { ImFacebook, ImInstagram, ImPinterest } from 'react-icons/im';
import { CursorContext } from '../context/CursorContext';
import { useContext } from 'react';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaverHandler}
      className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.facebook.com/DanhQuangVu/' target='_blank' rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='https://www.pinterest.com/quangvu2605/' target='_blank' rel="noreferrer">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='https://www.tiktok.com/@v.u_foto' target='_blank' rel="noreferrer"> {/*noreferrer:ngăn việc truyền thông tin giới thiệu (referrer) đến trang mới. */}
            <FaTiktok />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/v.u_foto/' target='_blank' rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
