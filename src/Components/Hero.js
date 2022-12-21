import {useNavigate} from 'react-router-dom';


function Hero()
{
    const navigate=useNavigate();
    function submitHandler()
    {
        navigate('/buy-course');
    }
    return(
        <div className="hero-container">
                <div className="row front-page justify-content-evenly">
                <div className="col-md-6 text-center front-div" data-aos="fade-up" data-aos-delay="10" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <h1>Become a Certified Front End Developer in 30 Days At Just Rs  499/- <del className="text-secondary fw-lighter">2999</del></h1>
                <p className="text-white">100% Money Back Guarantee*</p>
                <button className="register-btn" onClick={submitHandler} data-aos="flip-up" data-aos-delay="1500" data-aos-duration="2000" data-aos-easing="ease-in-out">Buy Course</button>
                </div>
                </div>
        </div>
    );
}

export default Hero;