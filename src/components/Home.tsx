export default function Home() {
    return(
        <div className="flex h-screen w-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-5 items-stretch">
            <div className="relative flex justify-center items-center flex-grow">
                <div className="flex flex-col justify-center text-center items-center p-5 mx-5 bg-white rounded-2xl shadow-2xl">
                    <img className="mx-auto h-64 w-auto mb-5 transform transition duration-500 ease-in-out hover:scale-110" src="/forest-view.svg" alt="Forest View"/>
                    <h1 className="text-3xl text-cyan-300 font-mono mb-2">Whispering Woods</h1>
                    <p className="text-gray-700 font-light font-mono mb-4">A place where you leave something behind to someone else.</p>
                    <button className="px-4 py-2 font-mono font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline transition duration-200 ease-in-out">
                        Leave your leaf
                    </button>
                </div>     
            </div> 
        </div>
    );
};