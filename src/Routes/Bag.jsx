import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
   const cartItems =  useSelector((store) => store.cart)
   const items = useSelector((store) => store.catalog);
   const finalCart = items.filter((item) => {
    return cartItems.indexOf(item.id) >= 0
   })

   return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalCart && finalCart.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        {finalCart.length > 0  ? <BagSummary /> : <p>Please add items to cart</p>}
      </div>
    </main>
  );
}

export default Bag;