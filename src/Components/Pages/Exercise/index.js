import React, { useState } from 'react';
import axios from 'axios';
import ActivityBoard from '../../ActivityBoard';
import CaloriesBoard from '../../CaloriesBoard';
import ExerciseForm from '../../ExerciseForm';


function Exercise() {

    // data returned by the api
    const [data, setData] = useState([]);
    // form input string
    const [inputValue, setInputValue] = useState('');
    // the api returns nothing if the search term is unknown - searchValid flags if the return is empty //
    const [searchValid, setSearchValid] = useState(true);
    // api search object
    const options = {
        method: 'GET',
        url: 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned',
        params: { activity: 'skiing' },
        headers: {
            'X-RapidAPI-Key': '0f00ac7dbfmsh66e84c80661526ep118f95jsnc65ea51f5423',
            'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
        }
    };
    // change to the form input field
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    // form submission
    function handleSubmit(event) {
        event.preventDefault();
        apiSubmission(inputValue);
    }
    // logic to handle when no data is returned by the api from an unknown search term
    function processResponse(data) {
        if (data.length === 0) {    // no data?
            setSearchValid(false)   // = invalid search
        } else {
            setData(data);          // sweet search
            setSearchValid(true);   // = valid search
        }
    }
    // activity card clicked - search for card's activity
    function handleClick(val) {
        setInputValue("");
        apiSubmission(val);
    }
    // 
    function apiSubmission(search) {
        options.params.activity = search;
        axios.request(options)
            .then(response => processResponse(response.data))
            .catch(error => console.log(error));
    }

    return (
        <body className="h-screen bg-gradient-to-b from-green-100 to-green-300">
            {/* cards for predefined sports */}
            <ActivityBoard handleClick={handleClick} />
            {/* form to choose a sport */}
            <ExerciseForm inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
            {/* warning mesaage if the search term is not found */}
            {!searchValid && (
                <div className="text-xl text-red-500 pl-24"> Sorry, no results for {inputValue} </div>
            )}
            {/* successful search displays calorie cards */}
            {searchValid && (
                <>
                    <CaloriesBoard data={data} />
                </>)}
        </body>
    );
};

export default Exercise;