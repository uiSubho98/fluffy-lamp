import React from 'react';
import './EachRead.css'
import {IoIosArrowForward} from 'react-icons/io'

const EachRead = ({eachTopic}) => {
    const {topic,description}=eachTopic
    return (
        <div className='eachTopic'>
                <h3>{topic}</h3>
                <p>{description}</p>
                <p className='readBtn'>READ MORE <IoIosArrowForward className='rightArrw'></IoIosArrowForward> </p>

        </div>
    );
};

export default EachRead;