import { createContext, useContext, useState } from "react"

const DarkContext = createContext()

function DarkModeContext({ children }) {
    const [isDark, setIsDark] = useState(false)

    function changeDarkMode() {
        setIsDark(dark => !dark)
    }

    return (
        <DarkContext.Provider value={{ isDark, changeDarkMode }}>
            {children}
        </DarkContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkContext)
    if (context === undefined) throw new Error("You Use context outside of the dark context component")
    return context
}

export default DarkModeContext
