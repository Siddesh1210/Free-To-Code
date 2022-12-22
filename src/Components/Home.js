import {useNavigate} from 'react-router-dom';
import Hero from './Hero';
import Benefit from './Benefit';
import CourseCard from './CourseCard';
import QNA from './QNA';
import Footer from './Footer';
import Syllabus from './Syllabus';
function Home()
{
    const navigate=useNavigate();
    function htmlHandler()
    {
        navigate('/syllabus');
    }
    return(
        <div>
        <Hero/>
        <Benefit/>
        <CourseCard/>
        {/* <Technology/> */}
        <Syllabus/>
        <QNA/>
        <Footer/>
        </div>
    );
}

export default Home;