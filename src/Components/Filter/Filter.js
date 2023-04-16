import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/cakesSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            <p onClick={() =>{dispatch(filterCategory(category))}} className={selectedCategory === category ? ' categoryButton' : 'categoryButton'}>{category}</p>
        </div>
    )
}

export default Filter;