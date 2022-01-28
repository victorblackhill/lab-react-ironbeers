import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link,useLocation} from "react-router-dom"
import Home from "./components/Home.jsx"
import Beers from "./components/Beers.jsx"
import RandomBeer from "./components/RandomBeer.jsx"
import NewBeer from "./components/NewBeer.jsx"


function App(props) {

  const location = useLocation()
  
  return (<>
    <header>
     { !(location.pathname === "/") && <Link to="/"><img src ="/assets/header.png"></img></Link> } 
    </header>
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
