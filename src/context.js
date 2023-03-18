import React, { useContext, useState } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    return (
        <AppContext.Provider value={{  }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook
function useGlobalContext() {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };