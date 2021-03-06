import Header from "./Layout/Header/Header";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
// import Home from './Pages/Home/Home';
import Branch from "./Pages/Branch/Branch";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default App;
