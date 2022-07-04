import React, { useEffect, useState } from 'react';
import './Banner.css'

const Banner = () => {

    const [banner,setBanner]=useState([])
    useEffect(()=>{
        fetch('https://sea-basket2.herokuapp.com/banner',{
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