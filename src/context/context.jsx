import React, { createContext, useState } from 'react';

const MyContext = createContext();

const SectionsProvider = ({ children }) => {
    const [bullet, setBullet] = useState(0); 
    const [height, setHeight] = useState(null);
    const [vid, setVid] = useState(0);
    const [imageView, setImageView] = useState("");
    const [imageActive, setImageActive] = useState(false);

    return <MyContext.Provider value={{ bullet, setBullet, height, setHeight, vid, setVid, imageView, setImageView, imageActive, setImageActive }}>
        {children}
    </MyContext.Provider>
}
export {MyContext, SectionsProvider}