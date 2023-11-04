import { useGetHotels } from "./useGetHotels";
import HotelsList from "./HotelsList";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateHotelModal from "./CreateHotelModal";
import { useSearchParams } from "react-router-dom";
import { useSearchByName } from "./useSearchByName";
import { Button } from "@nextui-org/button";
import SortDropDown from "../../ui/SortDropDown";
import SkeletonUi from "../../ui/Skeleton";
import { useDarkMode } from "../../context/DarkModeContext";

function Hotels() {
    const { isDark } = useDarkMode()
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedValue = searchParams.get('filter') || 'all';
    const selectedSearch = searchParams.get('search') || '';

    const [value, setValue] = useState('');
    const { search, isSearching } = useSearchByName(value);

    const sortedVal = searchParams.get('sortBy') || 'price';
    const [selectVal, setSelectVal] = useState(sortedVal);

    const { data, isLoading } = useGetHotels();
    const [showModal, setShowModal] = useState(false);

    let filteredData;

    function handleCloseModal() {
        setShowModal(false);
    }

    function handleFilter(value) {
        searchParams.set('filter', value);
        setSearchParams(searchParams);
    }

    function handleSort(e) {
        const { value } = e.target;
        searchParams.set('sortBy', value);
        setSearchParams(searchParams);
        setSelectVal(value);
    }

    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchParams.set('search', value);
        setSearchParams(searchParams);
    };


    if (sortedVal === 'price') filteredData = data?.sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sortedVal === 'rooms') filteredData = data?.sort((a, b) => a.rooms - b.rooms);
    if (sortedVal === 'rating') filteredData = data?.sort((a, b) => a.rating - b.rating);

    if (selectedValue === 'all') filteredData = data;
    if (selectedValue === 'pool') filteredData = data?.filter(item => item?.facilities.includes('Swimming Pool'));
    if (selectedValue === 'wifi') filteredData = data?.filter(item => item?.facilities.includes('Free Wifi'));
    if (selectedValue === 'spa') filteredData = data?.filter(item => item?.facilities.includes('Spa'));
    if (selectedSearch !== '') filteredData = search?.sort((a, b) => a.pricePerNight - b.pricePerNight);

    if (isLoading || isSearching) return <Spinner />;

    return (
        <>
            {isLoading ? <SkeletonUi /> : <>
                <div className={`duration-200 transition-all ${isDark ? 'bg-slate-900' : ''} min-h-screen bg-center absolute  max-w-[1920px] w-full font-serif`}>
                    <div className={`duration-200 transition-all ${isDark ? 'bg-slate-800' : 'bg-slate-100'} hidden sm:flex justify-center items-center  max-w-[1500px] w-full px-20 py-10 mt-28 ${isDark ? 'border-slate-600' : 'border-slate-200'} border-b-2  m-auto rounded-md`}>
                        <form onSubmit={handleSearchSubmit}>
                            <div className='flex items-center gap-4'>
                                <input
                                    value={value}
                                    onChange={handleSearchInputChange}
                                    className='text-xs py-3 px-4 rounded-md border-[1px]  border-slate-300'
                                    type='search'
                                    placeholder={`Search for a city`}
                                />

                                <Button type="submit" disabled={isLoading}>Search</Button>
                            </div>
                        </form>
                    </div>
                    <div className={`flex flex-col md:flex-row justify-center gap-4 items-center duration-200 transition-all ${isDark ? 'bg-slate-800' : 'bg-slate-100'} max-w-[1500px] w-full px-20 py-10 mt-10 border-b-2 ${isDark ? 'border-slate-600' : 'border-slate-200'} m-auto rounded-md`}>
                        <div className={` hidden sm:flex justify-between items-center duration-200 transition-all ${isDark ? 'bg-slate-400' : 'bg-white'} max-w-[500px] w-full font-semibold text-slate-100 py-2 px-3 rounded-md`}>
                            {/* new way with nextui */}
                            <Button className={`text-orange-800 ${selectedValue === 'all' ? 'bg-orange-500 border-orange-600 text-slate-100  py-3 px-4' : 'border-orange-500 hover:border-orange-600'}`} onClick={() => handleFilter('all')} color="primary" variant="bordered">
                                All
                            </Button>
                            <Button className={`text-orange-800 ${selectedValue === 'pool' ? 'bg-orange-500 border-orange-600 text-slate-100  py-3 px-4' : 'border-orange-500 hover:border-orange-600'}`} onClick={() => handleFilter('pool')} color="primary" variant="bordered">
                                Pool
                            </Button>
                            <Button className={`text-orange-800 ${selectedValue === 'wifi' ? 'bg-orange-500 border-orange-600 text-slate-100  py-3 px-4' : 'border-orange-500 hover:border-orange-600'}`} onClick={() => handleFilter('wifi')} color="primary" variant="bordered">
                                Wifi
                            </Button>
                            <Button className={`text-orange-800 ${selectedValue === 'spa' ? 'bg-orange-500 border-orange-600 text-slate-100  py-3 px-4' : 'border-orange-500 hover:border-orange-600'}`} onClick={() => handleFilter('spa')} color="primary" variant="bordered">
                                Spa
                            </Button>

                        </div>


                        {/* new way with nextui */}
                        <SortDropDown isDark={isDark} value={selectVal} onChange={handleSort} />
                    </div>
                    <div className="grid grid-cols-1 gap-4 mx-10 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredData.map((card) => <HotelsList isDark={isDark} card={card} key={card.id} />)}
                    </div>
                    <div className='flex justify-center items-center my-8'>
                        {/* <button onClick={() => setShowModal(true)} className='py-3 px-4 text-lg font-semibold text-slate-200 rounded-md bg-orange-500 hover:bg-orange-600  transition-colors duration-200'>Add new hotel</button> */}
                        <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => setShowModal(true)} color="primary" variant="shadow">
                            Add new hotel
                        </Button>
                    </div>
                </div>
                <Modal isOpen={showModal} closeModal={handleCloseModal}>
                    <CreateHotelModal resourceName={'Hotel'} onConfirm={''} onClose={handleCloseModal} />
                </Modal>
            </>
            }
        </>
    );
}
export default Hotels



