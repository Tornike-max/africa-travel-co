import { useDarkMode } from "../context/DarkModeContext"
import AreaStat from "../features/stats/AreaStat"
import BookingStats from "../features/stats/BookingStats"
import PieStat from "../features/stats/PieStat"

function StatPage() {
    const { isDark } = useDarkMode()
    return (
        <>
            <div className="flex flex-col lg:grid md:grid-cols-2 gap-4 p-5 pt-36">
                <div className={`shadow-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'} text-md font-bold text-center flex justify-center items-center p-6 rounded-lg row-span-2`}>
                    <BookingStats />
                </div>
                <div className={`shadow-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'} text-md font-bold text-center p-6 flex justify-center items-center rounded-lg row-span-2`}>
                    <PieStat />
                </div>
                <div className={`shadow-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'} text-md font-bold text-center p-6 flex justify-center items-center rounded-lg col-span-2`}>
                    <AreaStat />
                </div>
            </div>

        </>
    )
}

export default StatPage
