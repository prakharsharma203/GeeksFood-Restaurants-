import { Card } from "./components/navbar/card/card.jsx"
import { Navbar } from "./components/navbar/navbar"
import {data} from "./data.js"
import "./App.css"
import { useState } from "react"



function App() {
  
  const[filterData,setfilterData] = useState(data);
  

  return (
    <>
      <Navbar setfilterData={setfilterData}  filterData={filterData} data={data}/>
      <div className="container">
      {filterData.map((detail) => (
        <Card  detail={detail} />
      ))}
      </div>
    </>
  )
}

export default App
