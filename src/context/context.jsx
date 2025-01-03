import React, { createContext, useState } from 'react';

const MyContext = createContext();

const SectionsProvider = ({ children }) => {
    const [bullet, setBullet] = useState(0); 

    return <MyContext.Provider value={{ bullet, setBullet }}>
        {children}
    </MyContext.Provider>
}
export {MyContext, SectionsProvider}