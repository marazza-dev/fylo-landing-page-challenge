import "./hero.scss";

import introImg from "../../images/illustration-intro.png";

const Hero = () => {
  return (
    <>
      <section className='hero__section'>
        <div className='hero__container'>
          <img
            src={introImg}
            alt='people organizing papers into a folder'
            className='hero__image'
          />
          <header className='hero__header'>
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
          </header>
          <a href='#' className='btn'>
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
