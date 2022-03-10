import "./App.scss";

import { Navbar, Hero, Features } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main-wrapper'>
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default App;
