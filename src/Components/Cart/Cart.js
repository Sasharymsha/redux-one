import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return(
        <div>
            <img alt="cart" className="cartIcon" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/256/external-cart-supermarket-flatart-icons-flat-flatarticons.png"/>
            <h4>TOTAL: ${totalPrice} </h4>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/> )}
        </div>
    )
}

export default Cart;