import React, { createContext, useState } from 'react';

const MyContext = createContext();

const SectionsProvider = ({ children }) => {
    const [bullet, setBullet] = useState(0); 
    const [height, setHeight] = useState(null);

    return <MyContext.Provider value={{ bullet, setBullet, height, setHeight }}>
        {children}
    </MyContext.Provider>
}
export {MyContext, SectionsProvider}