import logo from './logo.svg';
import './App.css';
import Agro from './component/Agro';
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/'element={<Navigate replace to={`/docs/${uuid()}`}/>}/>
    <Route path='/docs/:id' element={<Agro/>}/>
    </Routes>
    </Router>
  );
}

export default App;
