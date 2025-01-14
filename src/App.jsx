import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import { SectionsProvider } from "./context/context";


const App = () => {
    return <SectionsProvider>
        <BrowserRouter>
            <div className="backdrop"></div>
            <Navbar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
            </Routes>


        </BrowserRouter>
    </SectionsProvider>
}
export default App;