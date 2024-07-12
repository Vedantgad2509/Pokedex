import Home from './Home';
import './App.css'
import './index.css'
import Navbar from './navbar'
import Star from './components/star';


function App() {
  
  return (
    <div style={{background:'#212121',color:"white",height:'100vh'}} className="Home">
      <Navbar/>
     
      <Home/>
      <div>
      <Star/>
    </div>
      
    </div>
    
  );
}

export default App;
