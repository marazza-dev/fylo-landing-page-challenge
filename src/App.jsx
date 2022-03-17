import "./App.scss";

import {
  Navbar,
  Hero,
  Features,
  Team,
  Testimonials,
  SignUp,
  Footer,
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
        <Footer />
      </main>
    </>
  );
};

export default App;
