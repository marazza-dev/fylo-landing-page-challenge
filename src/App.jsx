import "./App.scss";

import {
  Navbar,
  Hero,
  Features,
  Team,
  Testimonials,
  SignUp,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main-wrapper'>
        <Hero />
        <Features />
        <Team />
        <Testimonials />
        <SignUp />
      </main>
    </>
  );
};

export default App;
