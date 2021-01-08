import Header from './Layout/Header/Header';
import logo from './logo.svg';
import './App.css';
import Footer from './Layout/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
