import React, { useState } from "react";

type ThemeString = 'light' | 'dark'

interface IThemeContext {
    currentTheme: ThemeString,
    toggleTheme: () => void
}

export const ThemeToggleContext = React.createContext<IThemeContext>(
    {} as IThemeContext
);

export const ContextThemeProvider: React.FC<{
    children: (currentTheme: ThemeString) => React.ReactNode
}> = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeString>('light')

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeToggleContext.Provider value={{currentTheme, toggleTheme}}>
            {children(currentTheme)}
        </ThemeToggleContext.Provider>
    )
}

export default ContextThemeProvider;