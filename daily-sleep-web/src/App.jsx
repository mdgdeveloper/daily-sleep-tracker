import './App.css';
import Dashboard from './pages/Dashboard';
import Entry from './pages/Entry';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

  );
};

export default App;
