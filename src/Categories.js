import React from 'react';

const Categories = ({categories,setCat}) => {
  return <div className='btn-container'>
    {categories.map((cat)=>{
      return <button className='filter-btn' onClick={()=>setCat(cat)}>{cat}</button>

    })}
  </div>;
};

export default Categories;
