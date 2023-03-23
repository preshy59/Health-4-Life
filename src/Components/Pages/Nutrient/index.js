import React, { useState, useEffect } from "react";
import API from "../../../utils/API.js";
import SearchForm from "../../SearchForm";
import FoodResult from "../../Result"


function Nutrient() {
    //  utilizing of hook (useState) for some functionality
    const [error, setError] = useState("");
    const [food, setFood] = useState("");
    const [foodResult, setFoodResult] = useState("");

    // implentation of in the API code inside the useEffect which helps to prevent the code from running expect when required
    useEffect(() => {
        if (!food) {
            return;
        }
        console.log(API);

        // utilizing the API content and assign its values to the corresponding data
        const APISearch = async () => {
            const foodResult = await API.searchTerms(food);

            if (foodResult.data.length === 0) {
                setError("No foodResultults found.");
            }
            if (foodResult.data.status === "error") {
                setError(foodResult.data.message);
            }

            const results = foodResult.data.dishes.map(dish => {
                
                return (
                    // calling the variable that represnt the foodResult that is been imported and assign the values 
                    <FoodResult
                        name={dish.name}
                        protein={dish.protein}
                        fat={dish.fat}
                        carbs={dish.carbon}
                        carlories={dish.caloric}
                    />
                )
            });
            setFoodResult(results);
        }

        APISearch();
    }, [food]);

    const search = (searchTerms) => {

        console.log(searchTerms);
        setFood(searchTerms);
    }

    return (
        <div>
             {/* calling the variable that represent the Search that is been imported and assign the values  */}
            <SearchForm
                search={search}

            />

            {/* using of h1 to represent an error that might likely occur */}
            {error ? <h1>{error}</h1> : ""}

            {foodResult}
        </div>

    );
}
export default Nutrient;