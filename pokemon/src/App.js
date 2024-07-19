import Home from './Home';
import './App.css'
import './index.css'
import Navbar from './navbar'
import Search from './components/search';
import { BrowserRouter as Router } from 'react-router-dom';

import {Route,Switch} from 'react-router-dom'

function App() {
  
  return (
    <div style={{background:'#212121',color:"white"}} className="Home">
      <Navbar/>
      <Home/>
    </div>
    
  );
}

export default App;
