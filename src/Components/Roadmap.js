import Footer from './Footer';
import hero3 from '../Images/roadmap.png';
function Roadmap()
{
    return(
        <div>
        <div className='road-map-parent justify-content-center bg-white d-flex mt-5 pt-3'>
                <div className='col-md-10'>
                    <img src={hero3} className="img-fluid"/>
                </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Roadmap;
