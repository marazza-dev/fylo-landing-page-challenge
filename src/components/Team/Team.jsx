import "./team.scss";

import productiveImg from "../../images/illustration-stay-productive.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Team = () => {
  return (
    <section className='team__container' id='team'>
      <div className='team__image--wrapper'>
        <img
          src={productiveImg}
          alt='people collaborating to be more productive'
        />
      </div>
      <div className='team__content--wrapper'>
        <h2 className='heading__sub'>Stay productive, wherever you are</h2>
        <p className='paragraph'>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className='paragraph'>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href='#' className='team__link'>
          See how Fylo works <FaArrowCircleRight />
        </a>
      </div>
    </section>
  );
};

export default Team;
