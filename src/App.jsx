import "./App.scss";

import { Navbar, Hero, Features, Team, Testimonials } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main-wrapper'>
        <Hero />
        <Features />
        <Team />
        <Testimonials />
      </main>
    </>
  );
};

export default App;
