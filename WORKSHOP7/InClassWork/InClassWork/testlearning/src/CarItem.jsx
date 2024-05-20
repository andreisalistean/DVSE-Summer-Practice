/* eslint-disable react/prop-types */
import CarItemHeader from "./CarItemHeader"

export const CarItem = ({manufacturerLabel, manufacturer, handleButtonClick}) => {
    return <div className='carItem'>
        <CarItemHeader>
            <h5>{manufacturerLabel}: {manufacturer}</h5>
        </CarItemHeader>
        <button type='button' onClick={handleButtonClick}>Click me</button>
        <img src="./1.png"/>
    </div>
}
