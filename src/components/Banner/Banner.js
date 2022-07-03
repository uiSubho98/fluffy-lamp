import React, { useEffect, useState } from 'react';
import './Banner.css'

const Banner = () => {

    const [banner,setBanner]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/banner',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>setBanner(data))
    },[])
    return (
        <div>
            {
                banner.map(bImage=><img className='banner-image' src={bImage.picture}/>)
            }
        </div>
    );
};

export default Banner;