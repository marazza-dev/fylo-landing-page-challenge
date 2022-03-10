import "./App.scss";

import { Navbar, Hero } from "./layouts";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Hero />
      </main>
    </>
  );
};

export default App;
