/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { CarItem } from "./CarItem"

export const CarList = ({manufacturerLabel}) => {

    const data = [
        {id: 0, manufacturer: "Dacia"},
        {id: 1, manufacturer: "Volvo"},
        {id: 2, manufacturer: "BMW"},
        {id: 3, manufacturer: "Mercedes"},
    ]

    const [carListData, setCarListData] = useState(data)
    const [filteredList, setFilteredList] = useState(carListData)
    const [count, setCount] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")


    function handleButtonClick() {
        setCount(count + 1)
        //count++
        //console.log(count)
    }

    function handleInputChange(e){
        //console.log(e.target.value)
        //setSearchQuery(e.target.value)
        const temp = carListData.filter(item => !(item.manufacturer.toUpperCase().indexOf(e.target.value?.toUpperCase()) === -1))
        if(temp.length){
            setFilteredList(temp)
        }
    }

    return <div className='carList'>
        <input onChange={handleInputChange}/>
        {filteredList.map((item) => {
            return <CarItem key={item.id} handleButtonClick={handleButtonClick} manufacturerLabel={manufacturerLabel} manufacturer={item.manufacturer}/>
        })}
        <h2>Total count: {count}</h2>
    </div>
}
