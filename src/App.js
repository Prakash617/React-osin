import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import {incNumber} from "./actions";
import {decNumber} from "./actions";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
   <>
  <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
          <Route path="*" element={<NoPage/>} />
       
      </Routes>
    </BrowserRouter>
    <div className="main-div">
    

    <div className="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div className="quantity">
      <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
      <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
      <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
    </div>

        </div>
      </div>
   </>
  );
}

export default App;
