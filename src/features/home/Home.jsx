import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    return (
        <div
            className={`min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col sm:flex-row`}
            style={{
                backgroundImage: `url(/leopard4.jpg)`,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className="bg-opacity-70 py-64 px-10 rounded-lg mx-28 flex flex-col justify-start items-start max-w-[600px] w-full" style={{ height: '100vh', overflow: 'hidden' }}>
                <h1 className={`font-bold mb-4 text-slate-200 sm:text-3xl md:text-5xl lg:text-6xl duration-200 transition-all text-2xl text-left`}>Wonders of Africa</h1>
                <p className={`text-slate-200 sm:text-md md:text-lg text-xs mb-6 max-w-sm w-full`}>Embark on a journey to the enchanting home of the African safari, fiery savannah sunsets, and the colorfully clad Maasai - an epic adventure through Kenya’s iconic wilderness.</p>
                <div className='flex items-center gap-4'>
                    <button onClick={() => navigate('/bookings')} className={`bg-orange-500 text-slate-100 transition-colors duration-200 sm:text-sm md:px-3 md:py-2 lg:px-4 lg:py-3 md:text-md px-2 py-1 rounded-md hover:bg-orange-600`}>
                        Bookings
                    </button>
                    <button onClick={() => navigate('/tours')} className={`bg-orange-500 text-slate-100 transition-colors duration-200 sm:text-sm md:px-3 md:py-2 lg:px-4 lg:py-3 md:text-md px-2 py-1 rounded-md hover-bg-orange-600`}>
                        More info
                    </button>
                    <button onClick={() => navigate('/statistics')} className={`bg-orange-500 text-slate-100 transition-colors duration-200 sm:text-sm md:px-3 md:py-2 lg:px-4 lg:py-3 md:text-md px-2 py-1 rounded-md hover-bg-orange-600`}>
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
