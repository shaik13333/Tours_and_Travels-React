import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Card from "./Components/Cards";
import data from "./db"; // Assuming this is a valid array of city data
import Bengaluru from "./pages/Bengaluru";
import BengSubPage from './pages/BengSubPage'; 
import "./Components/Cards.css"; 

function App() {
    let [search, setSearch] = useState("");

    // Filtering based on search input (case-insensitive)
    let filterData = data.filter((item) => 
        item.cityName.toUpperCase().includes(search.toUpperCase())
    );

    return (
        <Router>
            <>
                <Nav />
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Home kkkk={setSearch}/>
                                <div id="container">
                                    {filterData.length > 0 ? (
                                        filterData.map((x) => (
                                            <Card
                                                key={x.place} // Ensure `place` is unique
                                                imgsrc={x.imgsrc}
                                                alt={x.alt}
                                                cityName={x.cityName}
                                                place={x.place}
                                            />
                                        ))
                                    ) : (
                                        <p>No cities found</p>
                                    )}
                                </div>
                            </>
                        } 
                    />
                    <Route path="/bengaluru" element={<Bengaluru />} />
                    <Route path="/bengSubPage" element={<BengSubPage />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;
