import React, {useContext, useState} from "react";
import { dummyData } from "./dummyData";
import { dummy2data } from "./dummy2data";
import { dummy1data } from "./dummy1data";
import { dummyBasic1 } from "./dummyBasic1";
import { dummyBasic2 } from "./dummyBasic2";
import { dummyBasic4 } from "./dummyBasic4";
import { dummyBasic3 } from "./dummyBasic3";
import { dummyKG } from "./dummyKG";
import { dummyNursery } from "./dummyNursery";

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [resultArray, setResultArray,] = useState(dummyNursery)
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