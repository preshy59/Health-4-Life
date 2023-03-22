

function ExerciseForm( { inputValue, handleChange, handleSubmit }) {

    return (
        <form className="w-full flex pt-8 pl-8 justify-center group-hover text-black focus-within:text-green-600 focus-within:underline" onSubmit={handleSubmit}>
            <label className="p-3 text-xl">
                Enter your sport
                <input className="pl-4" type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button className="bg-orange-100 hover:bg-orange-200 text-black font-bold p-2 border border-blue-700 rounded" type="submit">Submit</button>
        </form>
    )
}

export default ExerciseForm;