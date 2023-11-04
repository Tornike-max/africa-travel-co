import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useTrips } from "../trips/useTrips"
import { Spinner } from "@nextui-org/react"

function AreaStat() {
    const { data: trip, isLoading } = useTrips()
    if (isLoading) return <Spinner />
    console.log(trip)

    const data = trip.map(info => {
        return {
            "price": info?.flight_price,
            "depart_time": info?.depart_time,
            "duration": info?.duration,
            "name": info?.companyName
        }
    })
    console.log(data)


    return (
        <div className="w-[400px] h-[180px]  lg:w-[1000px] lg:h-[350px] md:w-[730px] md:h-[250px] recharts-cartesian-grid-horizontal recharts-cartesian-grid-vertical duration-200 transition-all">

            <h2 className="text-center text-2xl py-4 font-semibold text-indigo-500">Flight Stats</h2>

            <ResponsiveContainer >
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#837cfe" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#291eef" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#93faed" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#93faed" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" xAxisId="xAxis" />
                    <YAxis unit={`$`} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        strokeWidth={2}
                        name='Flight Price'
                        unit='$'
                        type="monotone"
                        dataKey="price"
                        stroke="#7770f9"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                        xAxisId="xAxis"
                    />

                    <Area
                        strokeWidth={2}
                        name='Flight Duration'
                        unit='$' type="monotone"
                        dataKey="duration"
                        stroke="#93faed"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                        xAxisId="xAxis" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AreaStat
