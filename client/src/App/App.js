// import logo from './logo.svg';
import './App.css';
import Dashboard from '../Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Teams from '../Pages/Teams';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Team" element={<Teams/>}/>
      </Routes> 
    </div>
  );
}

export default App;
