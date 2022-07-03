import React from 'react';
import './EachCategory.css'

const EachCategory = ({eachcategory}) => {
    const {name,picture}= eachcategory;
    return (
        <div className="col-4 eachCategory gx-5">
            <img className='category-card ' src={picture} alt="" />
            <h2 className='category-text text-center'>{name}</h2>

        </div>
    );
};

export default EachCategory;