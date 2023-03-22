import CaloriesCard from "../CaloriesCard";

function CaloriesBoard({ data }) {
    return (
        <div className="w-full flex p-8 flex-wrap mx-auto justify-center">
            {data.map(calorieData => (
                <CaloriesCard sport={calorieData.name} caloriesPerHour={calorieData.calories_per_hour} />
            ))}
        </div>
    )
}

export default CaloriesBoard;