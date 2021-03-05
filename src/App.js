import Header from './Layout/Header/Header';
import logo from './logo.svg';
import './App.css';
import Footer from './Layout/Footer/Footer';
// import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
