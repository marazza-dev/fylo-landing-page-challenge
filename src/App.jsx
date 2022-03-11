import "./App.scss";

import { Navbar, Hero, Features, Team } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main-wrapper'>
        <Hero />
        <Features />
        <Team />
      </main>
    </>
  );
};

export default App;
