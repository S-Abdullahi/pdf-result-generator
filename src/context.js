import React, {useContext, useState} from "react";
import { dummyData } from "./dummyData";

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [resultArray, setResultArray,] = useState(dummyData)
    const [inputData, setInputData] = useState([])
    return (
        <AppContext.Provider value={{resultArray, setResultArray, inputData, setInputData}}>
                {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export default AppProvider