import { Select, SelectItem } from "@nextui-org/react";

function SortDropDown({ onChange, value, isDark }) {

    const placements = [
        "outside",
    ];

    const choise = [
        { value: 'price', label: 'Sort by Price' },
        { value: 'rooms', label: 'Sort by Rooms' },
        { value: 'rating', label: 'Sort by Rating' }
    ]

    return (
        <div className={`duration-200 transition-all ${isDark ? 'bg-slate-400' : 'bg-white'} max-w-[200px] w-full flex flex-col gap-4 rounded-md`}>
            <div className="flex flex-col gap-2 ">
                {/* <h3 className="text-default-500 text-small">Without placeholder</h3> */}
                <div className={`duration-200 transition-all ${isDark ? 'bg-slate-400' : 'bg-white'} flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4`}>
                    {placements.map((placement) => (
                        <Select
                            labelPlacement={placement}
                            label="Choose any of them"
                            className="max-w-xs "
                            value={value}
                            onChange={onChange}
                        >
                            {choise.map((chose) => (
                                <SelectItem key={chose.value} value={chose.value}>
                                    {chose.label}
                                </SelectItem>
                            ))}
                        </Select>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SortDropDown
