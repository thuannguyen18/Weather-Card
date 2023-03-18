import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result}&APPID=72b17765da2f1f411242efecddcf2498`)
            const data = await reponse.json();
            if (data) {
                const type = data.weather[0].main;
                const { name, main: { temp } } = data;
                setInfo({ name, type, temp });
            }
        } catch (error) {
            console.log(error);
            setInfo(null);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (result) { 
            fetchWeather();
        }
    }, [result]);

    return (
        <AppContext.Provider value={{ result, setResult, loading, setLoading, info }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook
function useGlobalContext() {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };