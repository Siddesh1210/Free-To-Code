import {useNavigate} from 'react-router-dom';
function CourseCard()
{
    const navigate=useNavigate();
    function submitHandler()
    {
        navigate('/buy-course');
    }
    return(
        <div>
            <h1 className="text-center bg-white m-0 course-heading-about">About Course</h1>
        <div className="row syllabus-parent-div justify-content-evenly bg-white flex-wrap-reverse me-0">

            <div className="col-md-5 col-lg-3 px-3 mb-3 border py-2 course-card">
                <img src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" className="syllabus-card-image border-rounded"/>
                <h4 className="pt-3 fw-light">FrontEnd Development Bootcamp<br></br><span className="course-price-text">Rs <del>2999/-</del> 499/-</span></h4>

                <p>Start Date : 9th January 2023<br></br>Time : 7.00 PM to 8.00 PM</p>
                <button className="register-btn" onClick={submitHandler}>Enroll Now</button>
            </div>

            <div className="col-md-5 my-auto">
                <h2 className="text-justify syllabus-heading">FrontEnd Development Bootcamp</h2>
                <p className=" syllabus-heading syllabus-para">This certification bootcamp gives you an in-depth understanding of skills you need to become a  front-end developer. It gives you practical experience in html, css, javascript, bootstrap and more!
                </p>
                <div className="accordion syllabus-heading" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        HTML 5
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ul>
                        <li>Introduction to HTML</li>
                        <li>HTML Basic Tag</li>
                        <li>HTML Order & Unorder List</li>
                        <li>HTML Media Elements</li>
                        <li>HTML Form</li>
                        <li>HTML Table</li>
                        <li>HTML Mini Project</li>
                    </ul>
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        CSS 3
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ul>
                        <li>Introduction to CSS </li>
                        <li>Types of CSS</li>
                        <li>CSS Selector</li>
                        <li>CSS Box Model</li>
                        <li>CSS Positions & Flex Box</li>
                        <li>CSS Media Queries</li>
                        <li>CSS Animation & AOS</li>
                    </ul>
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        JavaScript ES6
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ul>
                        <li>Introduction to JS</li>
                        <li>JS Variable & Datatype</li>
                        <li>JS Array & Object</li>
                        <li>JS Functions & Control Structure</li>
                        <li>JS Map & Filter</li>
                        <li>JS DOM Manipulation</li>
                        <li>Form Validation Project</li>
                    </ul>
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Bootstrap 5
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ul>
                        <li>Introduction to Bootstrap 5</li>
                        <li>Bootstrap Grid System</li>
                        <li>Bootstrap Container & Flow</li>
                        <li>Bootstrap Components & Classes</li>
                        <li>Bootstrap Forms</li>
                        <li>Bootstap Icon</li>
                        <li>Major Project</li>
                    </ul>
                    </div>
                    </div>
                </div>
                
            </div>
            </div>

        </div>
        </div>
    );
}

export default CourseCard;