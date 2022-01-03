import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
    const {strCategory, strCategoryDescription, strCategoryThumb} = props;

    return <div className='card-wrap'>
        <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory}/>
          <span className="card-title title">{strCategory}</span>
        </div>
        <div className="card-content">
          <p>{strCategoryDescription.slice(0, 50)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${strCategory}`} className="btn">Watch category</Link>
        </div>
      </div>
    </div>
}

export default CategoryItem;