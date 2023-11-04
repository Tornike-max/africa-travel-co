import { HiOutlineXCircle } from "react-icons/hi2";


function BookingDeleteModal({ resourseName, onClose }) {

    return (
        <div className="bg-white rounded-lg p-8 max-w-xl w-screen shadow-xl">
            <div className="flex justify-end">
                <span onClick={onClose} className="text-3xl text-red-500 hover:text-red-600 duration-200 transition-colors cursor-pointer">
                    <HiOutlineXCircle />
                </span>
            </div>
            <h1 className="text-center text-xl font-semibold">{resourseName}</h1>
            <p>Are you sure you want to delete the {resourseName}?</p>
            <div className='flex justify-center items-center gap-2'>
                <button className='bg-slate-200 hover:bg-slate-300 rounded duration-200 transition-colors py-2 px-3' onClick={() => { }}>Close</button>
                <button className='bg-red-500 hover:bg-red-600 rounded duration-200 transition-colors py-2 px-3' onClick={() => { }}>Delete</button>
            </div>
        </div>
    );

}

export default BookingDeleteModal