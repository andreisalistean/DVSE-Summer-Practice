const CarItem = ({car}) => {
    const {image, manufacturer, model, vin, constuctionYear, price} = car

    return <div className="carItem">
        <div className="imageContainer">
            <img src={image}/>
        </div>
        <div className="carItemContent">
            <h2>{manufacturer}  {model}</h2>
            <p>{vin}</p>
            <p>{constuctionYear}</p>
        </div>
        <div className="carItemRightSide">
            <h2>{price}</h2>
        </div>
    </div>
}

export default CarItem