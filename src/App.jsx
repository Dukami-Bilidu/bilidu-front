import './App.css';
import Apply from './components/Apply';
import Apply1 from './components/Apply1';
import SideBar from './components/common/sidebar';
import Apply2 from './components/Apply2';


const App = () => {
  return (
    <div className="App">
     <Apply/>
     <Apply1/>
     <Apply2/>
     <SideBar/> 
    </div>
  );
}

export default App;
