import {useRef} from 'react';
// import {useNavigate} from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BuyCourse()
{
    const nameInput=useRef(null);
    const emailInput=useRef(null);
    const phone_no=useRef(null);
    const whatsapp_no=useRef(null);

    function paymentPayuHandler()
    {
        const username=nameInput.current.value;
        const useremail=emailInput.current.value;
        const phone_no_1=phone_no.current.value;
        const phone_no_2=whatsapp_no.current.value;
    
            let user={
                name:username,
                email:useremail,
                phone_number:phone_no_1,
                whatsapp_number:phone_no_2,
            }
    
            if(username.length > 3 && useremail.length > 3 && phone_no_1 > 1111111111 && phone_no_2 > 1111111111)
            {
                fetch('https://fewd-batch1-default-rtdb.firebaseio.com/user.json',{
                method:'post',
                body:JSON.stringify(user)
                })
                window.location.href='https://pmny.in/0I1jjXzTnN0H';
                // window.open('https://pmny.in/MrcQKGXI6zhq')
            }
            else 
            {
                // alert("Please enter all the input properly");
                toast.error("Please enter all the input properly",
                {
                    position:"top-center"
                });
            } 
    }

    // const navigate=useNavigate();
    // const loadScript = (src)=>
    // {
    //     return new Promise((resolve)=>
    //     {
    //         const script=document.createElement('script');
    //         script.src=src;

    //         script.onload=()=>{
    //             resolve(true)
    //         }

    //         script.onerror=()=>{
    //             resolve(false)
    //         }

    //         document.body.appendChild(script)
    //     })
    // }
    // const paymentHandler = async(amount) =>{
    //     const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    //     if(!res)
    //     {
    //         alert('You are offline....failed to load Razorpay!!!');
    //         return
    //     }

    //     const username=nameInput.current.value;
    //     const useremail=emailInput.current.value;
    //     const phone_no_1=phone_no.current.value;
    //     const phone_no_2=whatsapp_no.current.value;

    //     let user={
    //         name:username,
    //         email:useremail,
    //         phone_number:phone_no_1,
    //         whatsapp_number:phone_no_2,
    //     }

    //     if(username.length > 3 && useremail.length > 3 && phone_no_1 > 1111111111 && phone_no_2 > 1111111111)
    //     {
    //         fetch('https://fewd-batch1-default-rtdb.firebaseio.com/user.json',{
    //         method:'post',
    //         body:JSON.stringify(user)
    //     })

    //     const options={
    //         key:"rzp_test_gqC5UcSxC3FOLN",
    //         currency:"INR",
    //         amount:amount*100,
    //         name:"Free to Code",
    //         description:"Payment for Frontend Course",

    //         handler: function(response){
                
    //             alert("Thank you for your registeration...You will receive course confirmation mail within 24 hour.")
    //             navigate('/');
    //         },
            
    //     };
    //         const paymentObject = new window.Razorpay(options)
    //         paymentObject.open()
    //     }

    //     else 
    //     {
    //         // alert("Please enter all the input properly");
    //         toast.error("Please enter all the input properly",
    //         {
    //             position:"top-center"
    //         });
    //     }   
    // }
    return(
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center mt-5 mb-3 d-flex px-2">
            <div className="col-md-5 mt-5 text-white px-3 py-3 buy-form mx-2">
            <form>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" ref={nameInput}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={emailInput}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" maxLength={10} ref={phone_no}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Whatsapp Number</label>
                    <input type="tel" className="form-control" maxLength={10} ref={whatsapp_no}/>
                </div>
                <button type="button" className="payment-btn"  onClick={paymentPayuHandler} >Proceed for Payment</button>
                <hr></hr>
                <p className='pt-2 text-center payment-text'>Integrated with India's most trusted payment partner - <span className='razorpay-text'>PayU</span></p>
                <ToastContainer/>
            </form>
            </div>
        </div>
        </div>
    );
}

export default BuyCourse;