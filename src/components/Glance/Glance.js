import React, { useEffect, useState } from 'react';
import GlanceVideo from './GlanceVideo/GlanceVideo';

const Glance = () => {
    const [glance,setGlance]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/glance',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>setGlance(data))
    },[])
            // console.log(glance)
    return (
        <div>
            <h2 className='text-center mb-3'>A GLANCE AT OUR PRODUCT</h2>
                {
                    glance.map(glanceVideo=><GlanceVideo key={glanceVideo._id} glanceVideo={glanceVideo}></GlanceVideo>)
                }
        </div>
    );
};

export default Glance;