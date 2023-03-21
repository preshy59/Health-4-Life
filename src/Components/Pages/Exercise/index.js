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
    function ActivityCard( { id, name, imageSource, onClick } ) {
        return (
            <div className="max-w-sm w-32 rounded bg-orange-100 overflow-hidden shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => onClick(name)} key={id}>
                <img className="w-auto" src={imageSource} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                </div>
            </div>
        )
    }
    // output card
    function CaloriesCard( { sport, caloriesPerHour } ) {
        return (
            <div className="max-w-sm w-32 rounded bg-orange-100 overflow-hidden shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{sport}</div>
                    <div className="font-bold text-xl mb-2">{caloriesPerHour}</div>
                </div>
            </div>
        );
    }
    // render page
    return (
        <>
            <div className="overflow-hidden bg-green-100 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-6 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-6" id='section'>
                        {sportCards.map((sport) => (
                            <ActivityCard id={sport.id} name={sport.title} imageSource={sport.imageSource} onClick={handleClick} />
                        )
                        )}
                    </div>
                </div>
            </div>
            <form className="bg-green-100 border-solid group-hover text-black focus-within:text-green-600 focus-within:underline" onSubmit={handleSubmit}>
                <label className="p-3 text-xl">
                    Enter your sport:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button className="bg-orange-100 hover:bg-orange-200 text-black font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Submit</button>
            </form>
            <div className="bg-green-100">
                {!searchValid && (
                    <div>
                        Sorry, no results for {inputValue}
                    </div>
                )}
            </div>
            <div className="bg-green-100">
                {searchValid && (
                    <div className="overflow-hidden bg-green-100 py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-6 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-6" id='section'>
                                {data.map(post => (
                                    <CaloriesCard sport={post.name} caloriesPerHour={post.calories_per_hour} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Exercise;