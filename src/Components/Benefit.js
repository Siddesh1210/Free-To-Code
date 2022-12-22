import hero from '../Images/img-1.png';
function Benefit()
{
    return(
        <div className="container-fluid">
            <div className="row justify-content-center text-center bg-white">
                <div className="col-md-12 pt-5 pb-3">
                    <h2 className="benefit-text">Benefits</h2>
                </div>
            </div>
            <div className="row justify-content-evenly bg-white pb-3 align-items-center benefit-row-div">
                <div className="col-md-4">
                    <img src={hero} className="img-fluid"/>
                </div>
                <div className="col-md-5">
                    <h4 className="benefits"><span className="benefit-span"><i class="bi bi-check2-circle"></i> </span>1 Major Portfolio Project</h4>
                    <h4 className="benefits"><span className="benefit-span"><i class="bi bi-check2-circle"></i> </span>CheatCode And Certificate</h4>
                    <h4 className="benefits"><span className="benefit-span"><i class="bi bi-check2-circle"></i> </span>100% Money Back Guarantee</h4>
                    <h4 className="benefits"><span className="benefit-span"><i class="bi bi-check2-circle"></i> </span>Life Time Access to Recording</h4>
                    <h4 className="benefits"><span className="benefit-span"><i class="bi bi-check2-circle"></i> </span>30 Days Live Interactive Coding</h4>
                    <h4 className="benefits"><span className="benefit-span"><i class="bi bi-check2-circle"></i> </span>Access to 24/7 Discussion Group</h4>
                    <h4 className="benefits"><span className="benefit-span"><i class="bi bi-check2-circle"></i> </span>Virtual Live Hackathon At The End</h4>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Benefit;