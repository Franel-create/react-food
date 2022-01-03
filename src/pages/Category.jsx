import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { getFilteredCategory } from "../api";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";
import {useNavigate} from 'react-router-dom';

const Category = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <div>
            <button className='btn' onClick={() => navigate(-1)}>Go back</button>
            <div>
                {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
            </div>
        </div>
    )
}

export default Category;