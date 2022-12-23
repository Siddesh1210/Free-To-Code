import './App.css';
import logo from './Images/f2c_logo.png';
import {Route,Routes,Link} from 'react-router-dom';
import Home from './Components/Home';
// import Technology from './Components/Technology';
import BuyCourse from './Components/BuyCourse';
import HtmlSyllabus  from './Components/HtmlSyllabus';
import Display from './Components/Display';
import  Bonus from './Components/Bonus';
import Roadmap from './Components/Roadmap';
// import {useState , useEffect} from 'react';

function App() {
  // const [status,setStatus]=useState(true);
  // const [see,setSee]=useState(true);

  // useEffect(()=>
  // {
  //   setTimeout(()=>
  //   {
  //     setSee(false);
  //     console.log(see);
  //     setStatus(false);
  //   },3000)
  // })

  return (
    <div>
    {/* <div className={status?'display':'d-none'}></div> */}
    
      {/* <!-- navbar start --> */}

        <nav className="navbar navbar-dark navbar-expand-md nav-bar fixed-top">
          <div className="container-fluid">
            <img src={logo} className="img-fluid logo mt-0 pt-0"/>
            <a className="navbar-brand" href="#"> Free To Code</a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-1">
                  <Link to="/" className='page-link'><li className="nav-item nav-link">Home</li></Link>
                  <Link to="/technology" className='page-link'><li className="nav-item nav-link">Technology</li></Link>
                  <Link to="/roadmap" className='page-link'><li className="nav-item nav-link">Roadmap</li></Link>
                  <Link to="/buy-course" className='page-link'><li className="nav-item nav-link">Enroll Now</li></Link>
                </ul>  
            </div>
          </div>
        </nav>
        
        {/* <div className="Container-fluid"> */}
        <div className="container=fluid">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/technology" element={<HtmlSyllabus/>} />
            <Route path="/buy-course" element={<BuyCourse/>} />
            {/* <Route path="/technology" element={<HtmlSyllabus/>} /> */}
            {/* <Route path="/syllabus" element={<HtmlSyllabus/>} />
            <Route path="/syllabus" element={<HtmlSyllabus/>} />
            <Route path="/syllabus" element={<HtmlSyllabus/>} /> */}
            <Route path="/view-student" element={<Display/>} />
            <Route path="/bonus-reward" element={<Bonus/>} />
            <Route path="/roadmap" element={<Roadmap/>} />


          </Routes>
          </div>
        {/* </div> */}

    </div>
  );
}

export default App;
