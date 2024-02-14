import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Property from './Property';
import Proptable from './Proptable';
import Propupdate from './Propupdate';
import viewproperty from './viewproperty';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/property' element={<Property />}></Route>
        <Route path='/proptable' element={<Proptable />}></Route>
        <Route path='/propupdate/:id' element={<Propupdate />}></Route>
        <Route path='/viewproperty/:id' element={<viewproperty />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
