import ActivityCard from "../ActivityCard"

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

function ActivityBoard( { handleClick }) {
    return (
        <>
        <div className="w-full flex pt-32 flex-wrap mx-auto justify-center">
        {sportCards.map((sport) => (
            <ActivityCard id={sport.id} name={sport.title} imageSource={sport.imageSource} onClick={handleClick} />
        )
        )}
    </div>
                {/* icons website credited */}
                <a className="p-6 pt-6text-left text-sm"
                href="https://icons8.com/"
            >Icons courtesy of Icons8</a>
            </>
    )
}

export default ActivityBoard;