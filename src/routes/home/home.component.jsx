import Directory from "../../components/directory/directory.component"
import CategoriesArr from "../../utils/categories/CategoriesArr"

const Home = () => {
  return (
    <Directory categories={CategoriesArr}/>
  )
}

export default Home
