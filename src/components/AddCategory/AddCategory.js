import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const navigate=useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
    const imgLink= e.target.image.value;
    const name= e.target.category.value;
    // console.log(imgLink,category)
    const newcategories = {
        picture:imgLink,
        name:name,
    }
    console.log(newcategories);
    fetch(`http://localhost:5000/newcategories`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify( newcategories )
    })
        .then(res => res.json())
        .then(data => console.log(data));

        navigate('/')



    
}
    return (
        <div>
         <form id="contact" onSubmit={handleSubmit} >
            <fieldset>
      <input placeholder="Image Link" name='image' type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Category Name" name='category' type="text" tabindex="2" required />
    </fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Add</button>
    <p class="copyright">Designed for <span className='text-primary'>Sea-Basket</span></p>
  </form>
        </div>
    );
};

export default AddCategory;