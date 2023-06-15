import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Matt Caschetto</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#work">My Work</a>
          <a href="#contact">Contact Me</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <section className="hero-banner">
        <div>
          <h2>A Work In Progress</h2>
        </div>
      </section>

      <main>
        <section className="page-selection" id="about">
          <h2>About Me</h2>
          <article>
            <p>
              Hello, I created this website to display some of my work and describe a little about myself. I am a
              new web developer looking to find a position I can work in to both help the end users and provide
              myself with a place to grow and learn.(More to be added)
            </p>
          </article>
        </section>

        <section className="page-selection" id="work">
          <h2>My Work</h2>

          <div className="projects">
            <div className="flex-box">
              <div className="flex-item horiseon">
                <a href="https://cashew1337.github.io/Mod1-HW/">
                  <h3>Horiseon Refactor</h3>
                  <span>HTML/CSS</span>
                </a>
              </div>
              <div className="flex-item placeholder1">
                <a href="https://odobashigenci.github.io/Bites-n--booze/homepage.html" >
                  <h3>Bites-N-Booze</h3>
                  <span>HTML/CSS/JQuery/APIs</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-selection" id="contact">
          <h2>Contact Me</h2>
          <address>
            <a href="tel:2033057321" id="cell">203-305-7321</a>
            <a href="mailto:matt.caschetto@gmail.com">matt.caschetto@gmail.com</a>
            <a href="https://github.com/Cashew1337">Github</a>
          </address>
        </section>
      </main>
    </div >
  );
}

export default App;
