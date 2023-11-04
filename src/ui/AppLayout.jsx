import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useDarkMode } from "../context/DarkModeContext"

function AppLayout() {
    const { isDark } = useDarkMode()
    return (
        <div className={`${isDark ? 'bg-slate-900' : ''} `}>
            <Header />
            <main className={`${isDark ? 'bg-slate-900' : ''} font-serif duration-200 transition-all`}>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
