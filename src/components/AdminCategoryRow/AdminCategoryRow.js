import React from 'react';
import { Link } from 'react-router-dom';
import './AdminCategoryRow.css'
const AdminCategoryRow = ({categoryRow}) => {
    const {picture,name,_id}=categoryRow;
    console.log(_id);
    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/categories/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        
               <tr>
      <td><img className='categoryRowImg' src={picture} alt="" /></td>
      <td>{name}</td>
      <td>
        <Link to={`/categoryForm/${_id}`}><button className='me-3'>Edit</button></Link>
        <button onClick={()=>{handleDelete(_id)}} >Delete</button>
      </td>
    </tr>
        
    );
};

export default AdminCategoryRow;