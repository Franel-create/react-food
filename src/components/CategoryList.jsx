import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {
    const {catalog = []} = props;

    return <div>
        <div className='grid-cards'>
            {catalog.map(el => (
                <CategoryItem key={el.idCategory} {...el}/>
            ))}
        </div>
    </div>
    
}

export default CategoryList;