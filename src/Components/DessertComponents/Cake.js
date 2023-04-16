import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";

const Cake = ({cake}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return(
        <div>
            <img className="cake" alt="cake" src={`./${cake.img}.jpg`}/>
            <h3>{cake.name}</h3>
            <h3>${cake.price}</h3>
            <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch(addItemToCart({cake,quantity}));
            }}>ADD TO CART</button>
        </div>
    )
}

export default Cake;