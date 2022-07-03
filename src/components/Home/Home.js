import React from 'react';
import Banner from '../Banner/Banner';
import BlogTopic from '../BlogTopic/BlogTopic';
import Categories from '../Categories/Categories';
import FAQ from '../FAQ/FAQ';
import Glance from '../Glance/Glance';
import Read from '../Read/Read';
import Works from '../Works/Works';

const home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Works/>
            <Categories></Categories>
            <Glance></Glance>
            <FAQ></FAQ>
            <Read></Read>
            <BlogTopic></BlogTopic>
            
        </div>
    );
};

export default home;