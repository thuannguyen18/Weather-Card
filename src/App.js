import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { useGlobalContext } from './context';

function App() {
    const { result, info, loading } = useGlobalContext();
    
    return (
        <div className="app">
            <form className="form">
                <Search />
                {loading && <Loading />}
                {(info && !loading) && <Weather /> }
                {(!info && !loading && result) && <Error />}
            </form>
        </div>
    )
}

export default App;