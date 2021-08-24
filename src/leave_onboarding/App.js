import React , {useState,useEffect} from "react";
import axios from "axios";
import Datatable from "./Datatable";

require("es6-promise").pollyfill()
require("isomorphic-fetch")

export default function App(){

    const [data,setData] = useState([])
    const [q,setQ] = useState("")

    useEffect(()=>{

        //fetch("")
        axios.get('http://localhost:3002/employees')
        .then(response=>response.json())
        .then(json=>setData(json))
    },[]);

    function search(rows){

        return rows.filter((row) => row.firstName.toLowerCase().indexOf(q)>-1); //search query 
    }

    return(
        <div>
            <div>
                <input type="text" value={q} onChange={(e)=> setQ(e.target.value)} />
            </div>
            <div>
                <Datatable data={search(data)}/>
            </div>
        </div>
    )
}