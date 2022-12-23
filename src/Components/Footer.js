import logo from '../Images/f2c_logo.png';
function Footer()
{
    return(
        <div className="main-footer-div">
            <div className='logo-class'>
            <img src={logo} className="logo-footer"/>
            </div>
            <p className='footer-tagline' data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">Feel Free And Master Coding</p>
            <h4 class="icon-footer">
            <a href="tel:9623235838" className="footer-links"><i class="bi bi-phone"></i></a> &nbsp; 
            <a href="https://wa.me/9623235838" className="footer-links"><i class="bi bi-whatsapp"></i></a> &nbsp; 
            <a href="https://instagram.com/siddesh_1210?igshid=ZDdkNTZiNTM=" className="footer-links"><i class="bi bi-instagram"></i></a> &nbsp;
            <a href="https://www.linkedin.com/in/siddesh-jaiswal-3961a6223" className="footer-links"><i class="bi bi-linkedin"></i></a></h4>
            <p className='copyright'>Copyright &#169; <span className='company-name-footer'>Free To Code 2022.</span> All right reserved.</p>
        </div>
    );
}

export default Footer;