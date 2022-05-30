import React, { useState, useEffect } from "react";

export const GlobalContext = React.createContext();

export const TipContext=  () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [customTip, setCustomTip] = useState(0);
    const [people, setPeople] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [change, setChange] = useState(true);

    
    
};
