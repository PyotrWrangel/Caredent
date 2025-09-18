
function Experts({imgURL, name, yearService}) {

    return (
        <div className="rounded-full mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <div className="flex justify-center items-center h-48">
                <img src={imgURL} className="images rounded-full w-40" alt="experts"></img>
            </div>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h3 className="text-gray-500">{yearService}</h3>
            </div>
        </div>
    )
}

export default Experts;

