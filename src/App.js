import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Content from './Content';
import "./style.css"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/projects' element={<Content></Content>}></Route>
      <Route path='/company' element={<Content></Content>}></Route>
      <Route path='/reviews' element={<Content></Content>}></Route>

    </Routes>
    </>
  );
}

export default App;
