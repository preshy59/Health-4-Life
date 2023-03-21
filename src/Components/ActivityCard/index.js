

function ActivityCard({ id, name, imageSource, onClick }) {
    return (
        <div className="max-w-sm w-32 rounded bg-gradient-to-b from-orange-200 to-orange-100 m-1 shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            onClick={() => onClick(name)} key={id}>
            <img className="w-auto" src={imageSource} alt={name} />
            <div className="font-bold text-xl mb-2">{name}</div>
        </div>
    )
}

export default ActivityCard;