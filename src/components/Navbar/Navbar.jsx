import "./navbar.scss";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className='nav__container'>
        <div className='nav__logo'>
          <img src={logo} role='img' alt='stacked papers to form Fylo logo' />
        </div>
        <ul className='nav__link--list'>
          <li>
            <a href='#features' className='nav__link--item'>
              Features
            </a>
          </li>
          <li>
            <a href='#team' className='nav__link--item'>
              Team
            </a>
          </li>
          <li>
            <a href='#signup' className='nav__link--item'>
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
