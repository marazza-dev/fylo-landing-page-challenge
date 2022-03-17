import "./footer.scss";

import logo from "../../images/logo.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='footer__logo--wrapper'>
        <img src={logo} alt='Fylo' />
      </div>
      <div className='footer__info--wrapper'>
        <div className='location'>
          <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z'
              fill='#FFF'
              fillRule='evenodd'
            />
          </svg>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='contacts'>
          <div className='__telephone'>
            <svg width='18' height='18' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z'
                fill='#FFF'
                fillRule='evenodd'
              />
            </svg>
            <p className='paragraph'>+1-543-123-4567</p>
          </div>
          <div className='__email'>
            <svg width='20' height='16' xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' fillRule='evenodd'>
                <path d='M-2-4h24v24H-2z' />
                <path
                  d='M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z'
                  fill='#FFF'
                />
              </g>
            </svg>
            <p className='paragraph'>example@fylo.com</p>
          </div>
        </div>
        <div className='navigation'>
          <ul>
            {["About Us", "Jobs", "Press", "Blog"].map((item, index) => {
              return (
                <li key={`${item}-${index}`} className='paragraph'>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='navigation'>
          <ul>
            {["Contact Us", "Terms", "Privacy"].map((item, index) => {
              return (
                <li key={`${item}-${index}`} className='paragraph'>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='social'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
