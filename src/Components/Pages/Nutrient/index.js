import React, { useState, useEffect } from "react";
import API from "../../../utils/API.js";
import SearchForm from "../../SearchForm";
import FoodResult from "../../Result"


function Nutrient() {
    const [error, setError] = useState("");
    const[food, setFood] = useState("");
    const[foodResult, setFoodResult] = useState("");
    useEffect(() => {
        if (!food) {
            return;
        }
        console.log(API);

            const APISearch = async() =>{ 
                const foodResult = await  API.searchTerms(food);
               
                            if (foodResult.data.length === 0) {
                                setError("No foodResultults found.");
                            }
                            if (foodResult.data.status === "error") {
                                setError(foodResult.data.message);
                            }
                            const results = foodResult.data.dishes.map(dish => {
                                //return foodResult
                                return (
                                <FoodResult 
                                    name = {dish.name}
                                    protein = {dish.protein}
                                    fat = {dish.fat}
                                    carbs = {dish.carbon}
                                    carlories = {dish.caloric}
                                  />
                                )
                              });
                              setFoodResult(results);
                              
                // setName(foodResult.data.dishes[0].name);
                // setProtein(foodResult.data.dishes[0].protein);
                // setFat(foodResult.data.dishes[0].fat);
                // setCalroies(foodResult.data.dishes[0].caloric);
                // setCarbonhydrate(foodResult.data.dishes[0].carbon);
                // console.log(foodResult);
            }

            APISearch();
    }, [food]);

    const search = (searchTerms) => { 
        
        console.log(searchTerms);
        setFood(searchTerms);
    }

    return (
        <div>
            <SearchForm
                search={search}
               
            />
            {error?<h1>{error}</h1>:""}
            
            {foodResult}
        </div>

    );
}
export default Nutrient;