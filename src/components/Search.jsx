import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";

function Search() {
    const { setResult } = useGlobalContext();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(text);
    }

    return (
        <div className="search-container">
            <input 
                className="search-input" 
                type="text" 
                placeholder="ENTER YOUR LOCATION" 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className="search-btn" type="submit" onClick={handleSubmit}>
                <AiOutlineSearch className="search-icon" />
            </button>
        </div>
    );
}

export default Search;