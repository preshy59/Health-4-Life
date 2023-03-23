import React, { useState } from "react";
import "./style.css";


function SearchForm(props) {
    const [search, setSearch] = useState("");

    const handleInputChange = event => {

        setSearch(event.target.value);
        console.log(event);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.search(search);
    }

    return (

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 nutrient">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-25 w-auto logo"
                        src="./assets/images/_Health-4-Life-1.png"
                        alt="Your Company"
                    />
                </div>
                <form className="mt-8 space-y-6 form">
                    <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900 label">
                        Enter the name of the Food
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input

                            onChange={handleInputChange}
                            value={props.value}
                            type="text"
                            name="search"
                            id="search"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-900 ring-1 ring-inset ring-green-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            placeholder="Search for a food example, cake"
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleSubmit}

                            id="button"
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                            </span>
                            Search
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default SearchForm;