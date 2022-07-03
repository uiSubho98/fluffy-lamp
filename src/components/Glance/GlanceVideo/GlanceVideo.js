import React from 'react';
import './GlanceVideo.css'

const GlanceVideo = ({glanceVideo}) => {
    const {productVideo}=glanceVideo 
    return (
        <div className='' >
            <img className= 'productVideo' src={productVideo} alt="" />
        </div>
    );
};

export default GlanceVideo;