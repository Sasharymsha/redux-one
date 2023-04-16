import dataCakes from "../../data/dataCakes";
import Cake from "./Cake";
import { useSelector} from "react-redux";
import {getSelectedCategory } from "../../redux/cakesSlice";

const Cakes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            {dataCakes
            .filter(cake => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === cake.category
            })
            .map (cake => <Cake cake={cake}/>)}
        </div>
    )
}

export default Cakes;