import logo from "./logo.svg";
import phone from "./phone.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={40} />
        <nav className="App-nav">
          <a className="navi" href="#">
            Home
          </a>
          <a className="navi" href="#">
            About
          </a>
          <a className="navi" href="#">
            Blog
          </a>
          <a className="navi" href="#">
            Temps
          </a>
        </nav>
        <a className="navi navi-out" href="#">
          Contact Us
        </a>
      </header>
      <main className="App-main">
        <section className="App-intro">
          <div>
            <h1 className="App-title">OUR GOAL</h1><div  className="typewriter"><h2>
            To give you top <span className="gg">quality</span> potato stories, and increase the number of people that loves <span className="gg">potatoes</span></h2></div>
          </div>
          <img src={phone} className="phone" height={700}></img>
        </section>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
