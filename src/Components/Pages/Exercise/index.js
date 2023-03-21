import React, { useState } from 'react';
import axios from 'axios';


function Exercise() {

    // data returned by the api
    const [data, setData] = useState([]);
    // form input string
    const [inputValue, setInputValue] = useState('');
    // the api returns nothing if the search term is unknown - searchValid flags if the return is empty //
    const [searchValid, setSearchValid] = useState(true);

    // cards showing your favourite activities
    const sportCards = [
        {
            id: 1,
            title: "Cycling",
            imageSource: "https://img.icons8.com/ios/100/null/cycling-road--v1.png",
        },
        {
            id: 2,
            title: "Skiing",
            imageSource: "https://img.icons8.com/ios/100/null/skiing.png",
        },
        {
            id: 3,
            title: "Jogging",
            imageSource: "https://img.icons8.com/ios-filled/100/null/woman-athlete.png",
        },
        {
            id: 4,
            title: "Tennis",
            imageSource: "https://img.icons8.com/ios/100/null/tennis-2.png",
        },
        {
            id: 5,
            title: "Walking",
            imageSource: "https://img.icons8.com/fluency-systems-filled/96/null/walking-skin-type-1.png",
        },
        {
            id: 6,
            title: "Lifting",
            imageSource: "https://img.icons8.com/ios-filled/100/null/weightlift.png",
        },
    ];
    // api submission with default activity
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
        setInputValue(val);
        apiSubmission(val);
    }
    // 
    function apiSubmission(search) {
        options.params.activity = search;
        axios.request(options)
            .then(response => processResponse(response.data))
            .catch(error => console.log(error));
    }
    //input card
    function ActivityCard({ id, name, imageSource, onClick }) {
        return (
            <div className="max-w-sm w-32 rounded bg-gradient-to-b from-orange-200 to-orange-100 m-1 shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => onClick(name)} key={id}>
                <img className="w-auto" src={imageSource} alt={name} />
                <div className="font-bold text-xl mb-2">{name}</div>
            </div>
        )
    }
    // output card
    function CaloriesCard({ sport, caloriesPerHour }) {
        return (
            <div className="max-w-sm w-32 p-4 rounded m-1 bg-gradient-to-b from-orange-200 to-orange-100 shadow-lg">
                <div className="font-bold text-l mb-2">{sport}</div>
                <div className="font-bold text-l mb-2">{caloriesPerHour} calories per hour</div>
            </div>
        );
    }
    // render page
    return (
        <body className="h-screen bg-gradient-to-b from-green-100 to-green-300">
            {/* cards for predefined sports */}
            <div className="w-full flex pt-32 flex-wrap mx-auto justify-center">
                {sportCards.map((sport) => (
                    <ActivityCard id={sport.id} name={sport.title} imageSource={sport.imageSource} onClick={handleClick} />
                )
                )}
            </div>
            {/* form to choose a sport */}
            <form className="w-full flex pt-8 pl-8 justify-center group-hover text-black focus-within:text-green-600 focus-within:underline" onSubmit={handleSubmit}>
                <label className="p-3 text-xl">
                    Enter your sport
                    <input className="pl-4" type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button className="bg-orange-100 hover:bg-orange-200 text-black font-bold p-2 border border-blue-700 rounded" type="submit">Submit</button>
            </form>
            {!searchValid && ( // Error message
                <div className="text-xl text-red-500 pl-24"> Sorry, no results for {inputValue} </div>
            )}
            {/* successful search calorie cards */}
            {searchValid && (
                <div className="w-full flex p-8 flex-wrap mx-auto justify-center">
                    {data.map(post => (
                        <CaloriesCard sport={post.name} caloriesPerHour={post.calories_per_hour} />
                    ))}
                </div>
            )}
            <a className="p-6 text-left text-sm"
                href="https://icons8.com/"
            >Icons courtesy of Icons8</a>
        </body>
    );
};

export default Exercise;