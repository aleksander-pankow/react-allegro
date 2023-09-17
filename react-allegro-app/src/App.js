import logo from './logo.svg';
import './App.css';
import SearchSection from "./components/SearchSection";
import ResultCard from "./components/Results/ResultCard";

function App() {
    return (
        <div className="App dark">
            <section className="App-header">
                <h1 className="text-2xl font-bold underline">
                    Allegro Search
                </h1>
                <SearchSection/>
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </section>
        </div>
    );
}

export default App;
