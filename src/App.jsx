import CategoryItem from './components/category-item/category-item.component';
import CategoriesArr from './utils/categories/CategoriesArr'
import './categories.styles.scss'

const App = () => {

    return (
        <div className="categories-container">

            {CategoriesArr.map((category) => (
            <CategoryItem key={category.id} category={category}/>
            ))}

        </div>
    )
}

export default App

