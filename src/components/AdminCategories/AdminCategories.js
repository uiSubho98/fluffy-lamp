import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminCategoryRow from '../AdminCategoryRow/AdminCategoryRow';
import './AdminCategory.css'


const AdminCategories = () => {
    const [allCategory,setAllCategory]=useState([])
    useEffect(()=>{
        fetch('https://sea-basket2.herokuapp.com/categories',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>setAllCategory(data))
    },[allCategory])
    return (
        <div>
            <div className='category-container'>
                <div>
                <h2 className='text-center text-primary'>Category</h2>
                </div>
                <div >
                  <Link to='/addCategory'><button className='addCategory-btn'>Add Category</button></Link>  
                </div>
            </div>
            <table class="table  table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        allCategory.map(categoryRow=><AdminCategoryRow key={categoryRow._id} categoryRow={categoryRow}></AdminCategoryRow>)
    }
  </tbody>
</table>
        </div>
    );
};

export default AdminCategories;