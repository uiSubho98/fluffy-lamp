import React, { useEffect, useState } from 'react';
import EachFaq from './EachFaq/EachFaq';

const FAQ = () => {
    const [faq,setFaq]=useState([])
    useEffect(()=>{
        fetch('https://sea-basket2.herokuapp.com/faq',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>setFaq(data))
    },[])
    // console.log(faq);
    return (
        <div>
            <h2 className='text-center'>FAQS</h2>
           <div>
           {
                faq.map(eachFaq=><EachFaq key={eachFaq._id} eachFaq={eachFaq}></EachFaq>)   
            }
           </div>
        </div>
       
    );
};

export default FAQ;





