import React from "react";
import styles from  "./styles.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Main} from "./components/Main";
import { TipContext } from "./contextProvider/TipContext.js";

function App() {
    return (
    <BrowserRouter>
        <TipContext>
        <Routes>
            <Route path="/*" element={<Main />} />
        </Routes>
        </TipContext>
    </BrowserRouter>
    );
}

export default App;
