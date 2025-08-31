import { Routes, Route } from "react-router-dom"

import Navigation from "./routes/navigation/navigation.component"
import Home from "./routes/home/home.component"

const App = () => {

    const Shop = () => {
        return (
            <div>i am shop</div>
        )
    }

    return (
        <Routes>
            <Route path="/" element={ <Navigation /> }>
                <Route index element={ <Home /> }/>
                <Route path="shop" element={ <Shop /> }/>
            </Route>
        </Routes>
    )
}

export default App

