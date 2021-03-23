import Header from "./Layout/Header/Header";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Branch from "./Pages/Branch/Branch";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/contato" component={Home} />
        <Route path="/nucleos" component={Home} />
        <Route path="/ramo" component={Branch} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
