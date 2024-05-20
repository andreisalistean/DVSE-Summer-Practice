import { useMainStore } from "../App"
import AddModal from "./AddModal"
import "./Header.css"

const Header = () => {

    //const { toggleShowModal } = useMainContext()
    const toggleShowModal = useMainStore(state => state.toggleShowModal)

    function handleAddListing(){
        console.log("Add new listing")
        toggleShowModal(<AddModal/>)
    }

  return (
    <div className="header">
        <div className="headerContent">
            <h1>CarPark</h1>
            <button onClick={handleAddListing}>Add listing</button>
        </div>
        
    </div>
  )
}

export default Header