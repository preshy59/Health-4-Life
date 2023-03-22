import React, { useState, useEffect } from "react";
import API from "../../../utils/API.js";
import SearchForm from "../../SearchForm";
import FoodResult from "../../Result"


function Nutrient() {
    const [name, setName] = useState("");
    const [fat, setFat] = useState("");
    const [calroies, setCalroies] = useState("");
    const [protein, setProtein] = useState("");
    const [carbs, setCarbonhydrate] = useState("");
    // const [error, setError] = useState("");

    const[food, setFood] = useState("");

    useEffect(() => {
        if (!food) {
            return;
        }
        console.log(API);

            const APISearch = async() =>{ 
                const foodResult = await  API.searchTerms(food);
                setName(foodResult.data.dishes[0].name);
                setProtein(foodResult.data.dishes[0].protein);
                setFat(foodResult.data.dishes[0].fat);
                setCalroies(foodResult.data.dishes[0].caloric);
                setCarbonhydrate(foodResult.data.dishes[0].carbon);
                console.log(foodResult);
            }

        // API.searchTerms(food)
        //     .then(foodResult => {
        //         if (foodResult.data.length === 0) {
        //             throw new Error("No foodResultults found.");
        //         }
        //         if (foodResult.data.status === "error") {
        //             throw new Error(foodResult.data.message);
        //         }
        //         setName(foodResult.data[0][1]);
        //         setProtein(foodResult.data[0][6]);
        //         setFat(foodResult.data[0][4]);
        //         setCalroies(foodResult.data[0][2]);
        //         setCarbonhydrate(foodResult.data[0][5]);
        //     })
        //     .catch(err => setError(err));
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
                // foodResultults={search}
            />
            <FoodResult 
            name = {name}
            protein = {protein}
            fat = {fat}
            carbs = {carbs}
            carlories = {calroies}
            result = {search}
            
            />

        </div>

    );
}
export default Nutrient;