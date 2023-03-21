    // output card
    function CaloriesCard({ sport, caloriesPerHour }) {
        return (
            <div className="max-w-sm w-32 p-4 rounded m-1 bg-gradient-to-b from-orange-200 to-orange-100 shadow-lg">
                <div className="font-bold text-l mb-2">{sport}</div>
                <div className="font-bold text-l mb-2">{caloriesPerHour} calories per hour</div>
            </div>
        );
    }

    export default CaloriesCard;