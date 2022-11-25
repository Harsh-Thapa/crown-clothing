import DirectoryItem from "../directory-item/directory-item.component";
import { directory } from "./category-menu";
import {CategoriesContainer} from './directory.styles'

const Directory = () => {
  return (
    <CategoriesContainer>
      {directory.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </CategoriesContainer>
  )
}

export default Directory;