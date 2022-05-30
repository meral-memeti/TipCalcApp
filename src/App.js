import React from "react";
import styles from  "./styles.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./components/Home";
import { TipContext } from "./contextProvider/TipContext";

function App() {
    return (
    <BrowserRouter>
        <TipContext>
        <Routes>
            <Route path="/*" element={<Home />} />
        </Routes>
        </TipContext>
    </BrowserRouter>
    );
}

export default App;
