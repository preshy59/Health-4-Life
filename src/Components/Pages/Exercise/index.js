import React, { useState } from 'react';
import axios from 'axios';

function Exercise() {

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    
    const myArray = new Array(6).fill("Exercise");

    const options = {
        method: 'GET',
        url: 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned',
        params: { activity: 'skiing' },
        headers: {
            'X-RapidAPI-Key': '0f00ac7dbfmsh66e84c80661526ep118f95jsnc65ea51f5423',
            'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
        }
    };

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        options.params.activity = inputValue;
        axios.request(options)
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }

    return (
        <>
            <div>
                {myArray.map((value, index) => (<p key={index}>{value}</p>))}
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your sport:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <div>
                <ul>
                    {data.map(post => (
                        <li key={post.name}>
                            <h1>{post.name}</h1>
                            <h2>{post.calories_per_hour}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Exercise;