import { createContext, useEffect, useState } from "react";
export const AppStates=createContext();
export const StateProvider=({children})=>{

    const [state,setState]=useState()

    useEffect(()=>{
        window.addEventListener("scroll",onScroll);
        return ()=> window.removeEventListener("scroll",onScroll);
    },[])
    const onScroll=()=>{
        setState(window.scrollY)
    }
    return <AppStates.Provider value={{state,setState}}>
        {children}
    </AppStates.Provider>
}