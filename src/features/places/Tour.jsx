import { useNavigate } from "react-router-dom"
import { useGetPlaces } from "./useGetPlaces"
import Spinner from "../../ui/Spinner"
import { useDarkMode } from "../../context/DarkModeContext"

function Tour() {
    const { data, isLoading } = useGetPlaces()
    const { isDark } = useDarkMode()

    const navigate = useNavigate()

    if (isLoading) return <Spinner />
    console.log(data)
    return (
        <div className={`${isDark ? 'bg-slate-900' : ''} duration-200 transition-all min-h-screen bg-center absolute max-w-[1920px] w-full font-serif pt-10 sm:pt-0 py-10`}>
            <div className={`flex flex-col ${'md:grid grid-cols-2'} gap-4 h-screen max-w-[1920px] w-full px-10 py-10 mt-20`}>
                <div className={`flex justify-center items-center flex-col md:block duration-200 transition-all ${isDark ? 'bg-slate-700' : 'bg-slate-100'}  p-4 rounded-md }`}>
                    <h1 className={`text-xl ${'sm:text-2xl sm:text-center md:text-3xl md:text-left'} duration-200 transition-all ${isDark ? ' text-gray-200' : ' text-gray-800'}   font-semibold`}>
                        Take your stuff and
                        <p className={`text-lg ${'sm:text-xl  lg:text-2xl sm:text-center md:text-left'} duration-200 transition-all ${isDark ? ' text-gray-200' : ' text-gray-800'} text-left`}>discover the breathtaking</p>
                        <p className={`text-lg ${'sm:text-xl  lg:text-2xl sm:text-center md:text-left'} duration-200 transition-all ${isDark ? ' text-gray-200' : ' text-gray-800'} text-left`}>Seychelles</p>
                    </h1>

                    <h1 className={`mt-4 duration-200 transition-all ${isDark ? ' text-gray-200' : ' text-slate-700'} font-medium text-sm ${'sm:text-md  md:text-left'} max-w-[300px] w-full text-center`}>
                        <p>Get your tickets</p>
                        <p>online and secure</p>
                        <p>your spot.</p>
                    </h1>
                    <div className="mt-4">
                        <button onClick={() => navigate('/toursList')} className={`py-1 px-1 sm:py-2 sm:px-3 md:py-3 md:px-4 text-slate-100 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-md`}>
                            See all tours
                        </button>
                    </div>
                </div>
                <div className={`duration-200 transition-all ${isDark ? 'bg-slate-700' : 'bg-slate-100'} p-4 rounded-md`}>
                    <div className={`hidden ${'md:flex justify-between items-center'} mx-4`}>
                        <div className={`duration-200 transition-all ${isDark ? ' text-gray-200' : ' text-slate-500'}`}>
                            <p>Main</p>
                            <p>Attractions</p>
                            <p className={`text-4xl duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-800'}  font-semibold`}>12</p>
                        </div>
                        <div className={`duration-200 transition-all ${isDark ? ' text-gray-200' : ' text-slate-500'}`}>
                            <p>Flights</p>
                            <p>per day</p>
                            <p className={`text-4xl duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-800'}  font-semibold`}>03</p>
                        </div>
                        <div className={`duration-200 transition-all ${isDark ? ' text-gray-200' : ' text-slate-500'}`}>
                            <p>Main</p>
                            <p>Attractions</p>
                            <p className={`text-4xl duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-800'}  font-semibold`}>12:00</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4 sm:flex sm:justify-between sm:items-center mt-10`}>
                        {data?.map(place =>
                            <>
                                <div key={place?.id} className={`image-container flex items-center justify-center flex-col  sm:flex sm:justify-between sm:items-center mt-10`}>
                                    <img onClick={() => navigate(`/tours/${place?.id}`)} className={`w-20 h-20 hover:w-[82px] hover:h-[82px] md:w-24 md:h-24 hover:md:h-[98px] hover:md:w-[98px] rounded-md lg:w-28 lg:h-28 lg:hover:w-[115px] lg:hover:h-[115px] duration-200 transition-all cursor-pointer`} src={place.mainImage} alt="jpg" />
                                    <p className={`text-center mt-2 font-medium duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-700'} `}>{place?.name}</p>
                                </div>
                            </>
                        )}

                    </div>

                </div>
                <div className={`duration-200 transition-all ${isDark ? 'bg-slate-700' : 'bg-slate-100'} col-span-2  p-4 rounded-md`}>
                    <div className={`flex flex-col sm:flex-row md:flex justify-between items-center px-8`}>
                        <div className="max-w-md w-full">
                            <h1 className={`text-2xl duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-800'}  font-semibold`}>About</h1>
                            <p className={`py-4 duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-500'}`}>
                                The Seychelles is an archipelago of 115 islands in the Indian Ocean,
                                off East Africa. It’s home to numerous beaches, coral reefs, and
                                nature reserves, as well as rare animals such as giant Aldabra tortoises.
                                Mahé, a hub for visiting the other islands, is home to capital Victoria.
                                It also has the mountain rainforests of Morne Seychellois National Park
                                and beaches, including Beau Vallon and Anse Takamaka. The granite Inner
                                Islands include Praslin, with the renowned Anse Georgette beach, studded
                                with sculpted rock formations. Seychelles Black Parrots are found in the
                                Vallée de Mai Nature Reserve.
                            </p>
                        </div>
                        <div className="max-w-md w-full">
                            <h1 className={`text-2xl duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-800'}  font-semibold`}>When to visit</h1>
                            <p className={`py-4 duration-200 transition-all ${isDark ? ' text-gray-100' : ' text-slate-500'}`}>
                                The Seychelles Islands have a humid tropical climate with warm weather
                                year-round. May–Oct is the dry season, while Dec–Feb is rainy.
                                Peak travel coincides with key vacation periods over Easter (Mar–Apr),
                                the European summer (Jul–Aug) and Christmas/New Year (Dec).
                                Semaine de la Francophonie (Mahé Island, Mar) focuses on French culture.
                                Victoria’s Carnival (Apr) has colourful street parades and a party atmosphere.
                                Festival Kreol (Oct) brings creole food, music and dancing to the capital
                                Victoria and beyond.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Tour
