import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";

function Search() {
    const [text, setText] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=HANOI&units=metric&appid=53d2b9e5ffc4c41135c1487777c28306');
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div className="search-container">
            <input 
                className="search-input" 
                type="text" 
                placeholder="ENTER YOUR LOCATION" 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className="search-btn">
                <AiOutlineSearch className="search-icon" />
            </button>
        </div>
    );
}

export default Search;