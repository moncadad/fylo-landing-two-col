import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Getstarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      {/* header */}
      <Header />
      <main>
        {/* hero */}
        <Hero />
        {/* how-it-works */}
        <HowItWorks />
        {/* get-started */}
        <Getstarted />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
