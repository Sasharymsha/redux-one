import './App.css';
import Cakes from './Components/DessertComponents/Cakes';
import Cart from './Components/Cart/Cart';
import AllCategory from './Components/Filter/AllCategory';


function App() {
  return (
    <div className="App">
      <div className='first'>
        <h1>VEGAN  <img alt="cart" className="cartIcon" src="https://img.icons8.com/color/256/cake.png"/> DESSERTS</h1>
      </div>
      <div className='block'>
      <AllCategory/>
      <Cart/>
      </div>
      <div className='block'>
      <Cakes/>
      </div>
    </div>
  );
}

export default App;
