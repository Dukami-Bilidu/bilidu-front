import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import EditPage from "./pages/Edit";
import AddPage from './pages/Add';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<EditPage/>}/>
        <Route path="/add" element={<AddPage/>}/>
        </Routes>
      </BrowserRouter>

    
  );
} 

export default App;
