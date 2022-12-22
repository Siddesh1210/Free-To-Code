import {useNavigate} from 'react-router-dom';
import hero1 from '../Images/Html_Img.webp';
import hero2 from '../Images/CSS_Img.webp';
import hero3 from '../Images/JS_Img.png';
import hero4 from '../Images/Bootstrap_Img.png';

function Technology()
{
    const navigate=useNavigate();
    function htmlHandler()
    {
        navigate('/syllabus');
    }
    return(
        <div>
        <div className="pb-5 pt-5">
            <div className="technology-head">
            <h2 className="tech-text mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out">Technology We Will Cover</h2>
            </div>
            <div className="technology-parent">
                <div className="technology-child">
                    <div className="image-div">
                        <img src={hero1} className="image text-white" alt="html-image"/>
                    </div>
                    <button className="road-map-btn" onClick={htmlHandler} data-aos="flip-up" data-aos-delay="10" data-aos-duration="1000" data-aos-easing="ease-in-out">View Syllabus</button>
                </div>

                <div className="technology-child">
                    <div className="image-div">
                        <img src={hero2} className="image text-white" alt="CSS IMAGE"/>
                    </div>
                    <button className="road-map-btn" onClick={htmlHandler} data-aos="flip-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">View Syllabus</button>
                </div>

                <div className="technology-child">
                    <div className="image-div">
                        <img src={hero3} className="image"/>
                    </div>
                    <button className="road-map-btn" onClick={htmlHandler} data-aos="flip-up" data-aos-delay="400" data-aos-duration="1000" data-aos-easing="ease-in-out">View Syllabus</button>
                </div>

                <div className="technology-child">
                    <div className="image-div">
                        <img src={hero4} className="image"/>
                    </div>
                    <button className="road-map-btn" onClick={htmlHandler} data-aos="flip-up" data-aos-delay="600" data-aos-duration="1000" data-aos-easing="ease-in-out">View Syllabus</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Technology;