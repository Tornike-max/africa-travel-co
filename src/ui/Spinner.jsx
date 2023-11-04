import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Spinner = () => {
    const { isDark } = useDarkMode()
    return (
        <div className={`${isDark ? 'bg-slate-900' : ''} fixed top-0 left-0 w-screen h-screen bg-blur backdrop-blur-md flex justify-center items-center z-50`}>
            <div className={`${isDark ? 'bg-slate-900' : ''} w-16 h-16 border-t-4 border-orange-500 border-solid border-r-4 rounded-full animate-spin`}></div>
        </div>
    );
};

export default Spinner;