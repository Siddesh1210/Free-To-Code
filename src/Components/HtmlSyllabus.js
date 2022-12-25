import {useNavigate} from 'react-router-dom';
import Footer from './Footer';
import hero1 from '../Images/Html_Img.webp';
import hero2 from '../Images/CSS_Img.webp';
import hero3 from '../Images/JS_Img.png';
import hero4 from '../Images/Bootstrap_Img.png';
function HtmlSyllabus()
{
    const navigate=useNavigate();
    function bonusHandler()
    {
        navigate('/bonus-reward');
    }
    return(
        <div>
            <h1 className='text-center mt-5 pt-5 technology-heading-text'>Technology You Will Learn</h1>
        <div className="Main-Parent-Div">
        <div className="html-div">
            <div className="syllabusImage">
                <img src={hero1} className="imgSyllabus"/>
            </div>
            <ul className="pt-3">
                <li>Introduction to HTML</li>
                <li>HTML Basic Tag</li>
                <li>HTML Order & Unorder List</li>
                <li>HTML Media Elements</li>
                <li>HTML Form</li>
                <li>HTML Table</li>
                <li>HTML Mini Project</li>
            </ul>
            <hr></hr>
            <h5 className="text-center bonus-gift-text" onClick={bonusHandler}><i class="bi bi-gift"></i> - Bonus Gift </h5>
        </div>

        <div className="html-div">
            <div className="syllabusImage">
                <img src={hero2} className="imgSyllabus"/>
            </div>
            <ul className="pt-3">
                <li>Introduction to CSS </li>
                <li>Types of CSS</li>
                <li>CSS Selector</li>
                <li>CSS Box Model</li>
                <li>CSS Positions & Flex Box</li>
                <li>CSS Media Queries</li>
                <li>CSS Animation & AOS</li>
            </ul>
            <hr></hr>
            <h5 className="text-center bonus-gift-text" onClick={bonusHandler}><i class="bi bi-gift"></i> - Bonus Gift </h5>
        </div>

        <div className="html-div">
            <div className="syllabusImage">
                <img src={hero3} className="imgSyllabus"/>
            </div>
            <ul className="pt-3">
                <li>Introduction to JS</li>
                <li>JS Variable & Datatype</li>
                <li>JS Array & Object</li>
                <li>JS Functions & Control Structure</li>
                <li>JS Map, Filter & Events</li>
                <li>JS DOM Manipulation</li>
                <li>Form Validation Project</li>
            </ul>
            <hr></hr>
            <h5 className="text-center bonus-gift-text" onClick={bonusHandler}><i class="bi bi-gift"></i> - Bonus Gift </h5>
        </div>

        <div className="html-div">
            <div className="syllabusImage">
                <img src={hero4} className="imgSyllabus"/>
            </div>
            <ul className="pt-3">
                <li>Introduction to Bootstrap 5</li>
                <li>Bootstrap Grid System</li>
                <li>Bootstrap Container & Flow</li>
                <li>Bootstrap Components & Classes</li>
                <li>Bootstrap Forms</li>
                <li>Bootstap Icon</li>
                <li>Major Project</li>
            </ul>
            <hr></hr>
            <h5 className="text-center bonus-gift-text" onClick={bonusHandler}><i class="bi bi-gift"></i> - Bonus Gift</h5>
        </div>
        </div>
        <hr></hr>
        <Footer/>
        </div>
    );
}

export default HtmlSyllabus;