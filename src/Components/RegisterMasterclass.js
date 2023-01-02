import { useRef } from "react";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RegisterMasterclass()
{
    const username=useRef(null);
    const useremail=useRef(null);
    const userphonenumber=useRef(null);

    function registerHandler()
    {
        const tempname=username.current.value;
        const tempemail=useremail.current.value;
        const tempp_no=userphonenumber.current.value;
        // console.log(name,email,p_no);

        let user={
            name:tempname,
            email:tempemail,
            phoneNumber:tempp_no,
        }

        if(tempname.length <3 && tempemail.length <3 && tempp_no <111111111)
        {
            // alert('Please enter full detail');
            toast.error('Please fill up all details',
            {
                position:'top-center'
            })
        }
        else
        {
            fetch('https://register-masterclass-january-default-rtdb.firebaseio.com/user.json',
            {
                method:'post',
                body:JSON.stringify(user)
            }).then(()=>
            {
                // alert('Data added successfully');
                window.open('https://chat.whatsapp.com/JiDOYiJxr8d8xWqN3ciOUP');
                username.current.value="";
                useremail.current.value="";
                userphonenumber.current.value="";
            })
        }
    }
    return(
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center mt-5 mb-3 d-flex px-2">
            <div className="col-md-5 mt-5 text-white px-3 py-3 buy-form mx-2">
                <h5 className="text-center">Register below to join 2 day free masterclass on <span className='razorpay-text'>HTML, CSS and Javascript</span> </h5><hr></hr>
            <form>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" ref={username}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={useremail}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" maxLength={10} ref={userphonenumber}/>
                </div>
                <button type="button" className="payment-btn" onClick={registerHandler}>Register</button>
                <ToastContainer/>
            </form>
            </div>
        </div>
        </div>
    );
}

export default RegisterMasterclass;