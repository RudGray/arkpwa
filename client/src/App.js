import logo from './assets/hb-icon-icon.png';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="grid-container">
      <img src={logo} alt="Logo" className="grid-item" />
        <a href="#" className="grid-item">Login</a>
      </header>
      <main className="grid-container">
          <section className="content grid-item">
              <h2>This is the main content section</h2>
              <p>This is some text that is displayed in the main content section.</p>
          </section>
          <section className="content grid-item">
              <h2>This is another content section</h2>
              <p>This is some more text that is displayed in the main content section.</p>
          </section>
          <section className="content grid-item">
              <h2>This is the third content section</h2>
              <p>This is even more text that is displayed in the main content section.</p>
          </section>
      </main>
      <footer className="grid-container">
          <ul className="grid-item">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
          </ul>
      </footer>
    </div>
  );
}

export default App;
