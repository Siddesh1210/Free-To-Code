import Structure from './Structure';
import {useState , useEffect} from 'react';
function ShowPage()
{
    const [loadStatus,setLoadStatus]=useState(true);
    const[update,setUpdate]=useState([]);
    useEffect(()=>
    {
        fetch('https://fewd-batch1-default-rtdb.firebaseio.com/user.json').then
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
            }console.log(update);
    })
    },[])
    return(
        <div>
            <h1 className='x-schedule'>Number Of Registered Student </h1>
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
                        return <Structure name={x.name} email={x.email} p_no={x.phone_number} w_no={x.whatsapp_number}/>
                    })
                }
            </div>
        </div>
    );
}

export default ShowPage;