import React, { useEffect, useState } from 'react';
import EachCategory from './EachCategory/EachCategory';
import './Categories.css'

const Categories = () => {

    const [categories,setCategories]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    // console.log(categories);
    return (
        <div>
            <h2>Categories</h2>
            <div>
                <div className='row categoryRow '>
                    {
                        categories.map(eachcategory=><EachCategory key={eachcategory._id} eachcategory={eachcategory}></EachCategory>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Categories;