import { Legend, Pie, PieChart, Tooltip } from "recharts"
import { useGetHotels } from "../tours/useGetHotels";
import { Spinner } from "@nextui-org/react";

function PieStat() {
    const { data: hotels, isLoading } = useGetHotels()

    if (isLoading) return <Spinner />



    const data = hotels.map(info => {
        const hotelName = info?.hotelName.split(' ').slice(0, 2).join(' ');
        return {
            "hotelName": hotelName,
            'pricePerNight': info?.pricePerNight,
        }
    })
    console.log(data)



    return (
        <div className="flex justify-center items-center flex-col w-[250px] lg:w-[450px] lg:h-[200px] md:w-[350px] sm:w-sm[250px] rounded-md px-16 col-span-2 col-start-3">

            <h2 className="text-center text-2xl py-4 font-semibold text-indigo-500">Hotel Stats</h2>

            <PieChart width={450} height={230}>
                <Pie
                    data={data}
                    dataKey="pricePerNight"
                    nameKey="hotelName"
                    innerRadius={70}
                    outerRadius={95}
                    cx='45%'
                    xy='50%'
                    paddingAngle={2} fill="#8884d8"

                />
                <Tooltip />
                <Legend verticalAlign='middle' align='right' width='50%' layout="vertical" iconSize={5} iconType="circle" />
            </PieChart>
        </div>
    )
}

export default PieStat
