import { useNavigate } from "react-router-dom"

function Trip() {
    const navigate = useNavigate()
    return (
        <div
            className={`min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col sm:flex-row`}
            style={{
                backgroundImage: `url(/lion.jpg)`,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className="bg-opacity-70 py-64 px-10 rounded-lg mx-28 flex flex-col justify-start items-start max-w-[600px] w-full" style={{ height: '100vh', overflow: 'hidden' }}>
                <h1 className={`font-bold mb-4 text-slate-200 sm:text-2xl md:text-3xl lg:text-4xl duration-200 transition-all text-2xl text-left`}>
                    Discover the real Africa
                    <p>with Africa Travel Co.</p>
                </h1>
                <p className={`text-slate-200 sm:text-md md:text-md text-sm mb-6 max-w-sm w-full`}>45 years in the making, we introduce you to our
                    Africa – brand new trips that we’ve crafted with first-hand knowledge and a connection to
                    the local heritage that you won’t find with anyone else.
                </p>
                <div className='flex items-center gap-4'>
                    <button onClick={() => navigate('/allFlight')} className="text-slate-200 py-2 px-3 rounded-md bg-orange-500 hover:bg-orange-600 duration-200 transition-colors font-semibold">See all trips</button>
                </div>
            </div>
        </div>
    )
}

export default Trip
