import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NoPage from './components/NoPage';


function App() {
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

   </>
  );
}

export default App;
