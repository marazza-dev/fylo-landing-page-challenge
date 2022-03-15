import "./sign-up.scss";

const SignUp = () => {
  return (
    <section className='sign-up__section'>
      <div className='sign-up__container'>
        <div className='sign-up__heading'>
          <h2 className='heading'>Get early access today</h2>
          <p className='paragraph'>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className='sign-up__form'>
          <input type='email' placeholder='example@example.com'></input>
          <button className='btn btn--submit' type='submit'>
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
