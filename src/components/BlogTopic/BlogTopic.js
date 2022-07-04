import React, { useEffect, useState } from 'react';
import EachBlog from '../EachBlog/EachBlog';

const BlogTopic = () => {
    const [blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('https://sea-basket2.herokuapp.com/blogTopic',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    console.log(blog);
    return (
        <div>
            <h2 className='text-center'>TOPICS YOU CAN'T MISS</h2>
            <div>
                {
                    blog.map(eachBlog=><EachBlog key={eachBlog._id} eachBlog={eachBlog}></EachBlog>)
                }
            </div>
        </div>
    );
};

export default BlogTopic;