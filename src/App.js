import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home.jsx"
import Beers from "./components/Beers.jsx"
import RandomBeer from "./components/RandomBeer.jsx"
import NewBeer from "./components/NewBeer.jsx"

function App() {
  return (<>
    <div>
      <Link to="/">Beers to Home</Link>
    </div>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/beers" element={ <Beers/> }/>
      <Route path="/random-beer" element={ <RandomBeer/> }/>
      <Route path="/new-beer" element={ <NewBeer/> }/>
    </Routes>
    </>
  );
}

export default App;
