import SearchSection from "./SearchSection";
import ResultCard from "./Results/ResultCard";
import React from "react";

function HomePage(props) {
    return (
        <div className="App dark">
            <section className="App-header">
                <h1 className="text-2xl font-bold underline">
                    Allegro Search
                </h1>
                <SearchSection/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
            </section>
        </div>
    );
}
export default HomePage;
