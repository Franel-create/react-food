import React from "react";
import Meal from "./Meal";

const MealList = (props) => {
    const {meals} = props;
    return <div className='grid-cards'>
        {meals.map(meal => (
            <Meal key={meal.idMeal} {...meal}/>
        ))}
    </div>
}

export default MealList;