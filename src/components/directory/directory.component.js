import CategoryItem from "../category-item/category-item.component";
import { directory } from "./category-menu";
import './directory.styles.scss'

const Directory = () => {
  return (
    <div className="categories-container">
      {directory.map((category) => (
        <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
  )
}

export default Directory;