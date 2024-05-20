import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

    const mainStyle = {
        flex: "1"
    }

    return (
        <div style={mainStyle}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App
