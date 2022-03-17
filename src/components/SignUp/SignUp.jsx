import useValidation from "../../hook/useValidation";
import validate from "./validationRules";
import "./sign-up.scss";

const SignUp = () => {
  const initialValues = { email: "" };
  const submitForm = () => console.log("Email submitted successfully!");

  const { handleChange, handleSubmit, values, errors } = useValidation(
    initialValues,
    submitForm,
    validate
  );

  return (
    <section className='sign-up__section' id='signup'>
      <div className='sign-up__container'>
        <div className='sign-up__heading'>
          <h2 className='heading'>Get early access today</h2>
          <p className='paragraph'>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className='sign-up__form' onSubmit={handleSubmit} noValidate>
          <input
            type='email'
            name='email'
            className={errors.email ? "danger" : ""}
            placeholder='example@example.com'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span className='danger'>{errors.email}</span>}
          <button className='btn btn--submit' type='submit'>
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
