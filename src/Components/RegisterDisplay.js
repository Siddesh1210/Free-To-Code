import Structure from './Structure';
import {useState , useEffect} from 'react';
function RegisterDisplay()
{
    const [loadStatus,setLoadStatus]=useState(true);
    const[update,setUpdate]=useState([]);
    useEffect(()=>
    {
        fetch('https://register-masterclass-january-default-rtdb.firebaseio.com//user.json').then
        (response=>response.json()).then(data=>
            {
                const users=[];
                for(let key in data)
                {
                    const user_detail={
                        id:key,
                        ...data[key]                    
                }
                users.push(user_detail);
                setLoadStatus(false);
                setUpdate(users);  
            }
    })
    },[])
    return(
        <div>
            <h1 className='x-schedule'>Number Of Registered Student for Masterclass </h1>
            {/* animation gif */}
            <div class={loadStatus?'center':'d-none'}>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            {/* end gif */}
            <div className='structure-display'>
                {
                    update.map((x)=>
                    {
                        return <Structure name={x.name} email={x.email} p_no={x.phoneNumber}/>
                    })
                }
            </div>
        </div>
    );
}

export default RegisterDisplay;