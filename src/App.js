import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Error from "./components/Error";
import { useGlobalContext } from './context';

function App() {
    return (
        <div className="app">
            <form className="form">
                <Search />
                <Weather />
            </form>
        </div>
    )
}

export default App;