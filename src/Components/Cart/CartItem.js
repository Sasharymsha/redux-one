import dataCakes from "../../data/dataCakes";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
    const cakes = dataCakes.find(item => item.id === cartItem.cakeId);
    const dispatch = useDispatch();
return(<div>
        <p>{cakes.name}</p>
        <p>{cartItem.quantity} portion(s) </p>
        <p>Price: ${cakes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" alt="delete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
        </span>
    </div>
)
}
export default CartItem;