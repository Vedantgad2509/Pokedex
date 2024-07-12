import Home from './Home';
import './App.css'
import './index.css'
import Navbar from './navbar'


function App() {
  
  return (
    <div style={{background:'#212121',color:"white",height:'100vh'}} className="Home">
      <Navbar/>
     
      <Home/>
      
    </div>
  );
}

export default App;
