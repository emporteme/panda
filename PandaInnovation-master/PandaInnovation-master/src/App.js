import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Composition from "./components/Composition";
import "./scss/app.scss";
import About from "./components/About";
import Products from "./components/Products";
import Record from "./components/Record";
import Cases from "./components/Cases";
import Important from "./components/Important";
import Support from "./components/Support";
import Team from "./components/Team";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import Follow from "./components/Follow";
import AboutPhone from "./components/AboutPhone";

function App() {
  return (
    <div >
      <Header />
      <AboutPhone />

        <div className="wrapper">
      <div className="main">
          <Sidebar />
          <Composition />
        </div>
      </div>
      <About />
      <Products />
      <Record />
      <Cases />
      <Important />
      <Support />
      <Team />
      <Follow />
      <Consultation />
      <Footer />
    </div>
  );
}

export default App;
