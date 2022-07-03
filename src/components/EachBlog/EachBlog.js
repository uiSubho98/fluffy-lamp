import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import './EachBlog.css'

const EachBlog = ({eachBlog}) => {
    const {topics,description,picture}= eachBlog;
    return (
        <div className='eachBlog'>
        <div className='blogText'>
        <h3>{topics}</h3>
        <p>{description}</p>
        <p className='blogBtn'>READ MORE <IoIosArrowForward className='rightArrwblog'></IoIosArrowForward> </p>
        </div>
            <img className='blogimg' src={picture} alt="" />
        <div>

</div>

</div>
    );
};

export default EachBlog;