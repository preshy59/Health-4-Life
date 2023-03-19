import React, { useState } from 'react';
import axios from 'axios';

function Exercise() {

    const [inputValue, setInputValue] = useState('');
    const [selectedCard, setSelectedCard] = useState([]);

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
    ];

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
        setInputValue(event.dataset.dataTarget);
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     options.params.activity = inputValue;
    //     axios.request(options)
    //         .then(response => setData(response.data))
    //         .catch(error => console.log(error));
    // }

    function handleClick(id) {
        setSelectedCard(id);
    }

    return (
        <>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-3 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2" id='section'>

                        {sportCards.map((sport) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            onClick={() => handleClick(sport.id)} key={sport.title} data-target={sport.title}>
                                <img className="w-full" src={sport.imageSource} alt={sport.title} data-target={sport.title} />
                                <div className="px-6 py-4"  data-target={sport.title}>
                                    <div className="font-bold text-xl mb-2" data-target={sport.title} >{sport.title}</div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
      {selectedCard && (
        <div className="selected-card">
          You selected card {selectedCard}.
        </div>
      )}

            {/* <form onSubmit={handleSubmit}>
                <label>
                    Enter your sport:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form> */}
            {/* <div>
                <ul>
                    {data.map(post => (
                        <li key={post.name}>
                            <h1>{post.name}</h1>
                            <h2>{post.calories_per_hour}</h2>
                        </li>
                    ))}
                </ul>
            </div> */}
        </>
    );
};

export default Exercise;