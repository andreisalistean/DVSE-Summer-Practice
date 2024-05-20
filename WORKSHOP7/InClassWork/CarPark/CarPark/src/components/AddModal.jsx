import { useState } from "react"

const AddModal = () => {

    const [newCar, setNewCar] = useState({})
    
    function handleChange(e){
        setNewCar({...newCar, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h1>Add new car</h1>
            <p>VIN</p><input onChange={handleChange} name="vin"/>
            <p>Manufacturer</p><input onChange={handleChange} name="manufacturer"/>
            <p>Model</p><input onChange={handleChange} name="model"/>
            <p>Year</p><input onChange={handleChange} name="constuctionYear"/>
        </div>
    )
}

export default AddModal