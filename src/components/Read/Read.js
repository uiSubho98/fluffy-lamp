import React, { useEffect, useState } from 'react';
import EachRead from '../EachRead/EachRead';

const Read = () => {
    const [readTopics,setReadTopics]=useState([])
    useEffect(()=>{
        fetch('https://sea-basket2.herokuapp.com/readTopics',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>setReadTopics(data))
    },[])
    console.log(readTopics)
    return (
        <div>
            <h2 className='text-center mb-4'>HAVE A READ</h2>
            <div>
                {
                    readTopics.map(eachTopic=><EachRead key={eachTopic._id} eachTopic={eachTopic}></EachRead>)
                }
            </div>
        </div>
    );
};

export default Read;