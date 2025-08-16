import Directory from "./components/directory/directory.component"
import CategoriesArr from "./utils/categories/CategoriesArr"

const App = () => {

    return (
        <Directory categories={CategoriesArr}/>
    )
}

export default App

