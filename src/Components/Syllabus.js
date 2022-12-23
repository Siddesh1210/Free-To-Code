import hero1 from '../Images/Git_icon.png';
import hero2 from '../Images/Github_icon.png';
import hero3 from '../Images/Html_icon.png';
import hero4 from '../Images/Css_icon.png';
import hero5 from '../Images/Js_icon.png';
import hero6 from '../Images/Bootstrap_icon.webp';



function Syllabus()
{
    return(
        <div>
            <div className="syllabus-head-text">
                <h1>Tools And Technology We Will Cover</h1>
            </div>
            <div className='parent-of-all-image'>
                <div className="all-icon-image"><img src={hero1} className='child-icon-image'/></div>
                <div className="all-icon-image"><img src={hero2} className='child-icon-image'/></div>
                <div className="all-icon-image"><img src={hero3} className='child-icon-image'/></div>
                <div className="all-icon-image"><img src={hero4} className='child-icon-image'/></div>
                <div className="all-icon-image"><img src={hero5} className='child-icon-image'/></div>
                <div className="all-icon-image"><img src={hero6} className='child-icon-image'/></div>
            </div>            
        </div>
    );
}

export default Syllabus;