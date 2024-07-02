import { useSelector, useDispatch} from "react-redux";
import { cartActions } from "../store/cartSlice";

const HomeItem = ({item}) => {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart);
    const elementFound = cart.indexOf(item.id) >=0 ? true: false

    const handleAddTocart = () =>{
        dispatch(cartActions.addItem(item.id))
    }

    const removeFromcart = () =>{
        dispatch(cartActions.deleteItem((item.id)))
    }
    return (
        <>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image"/>
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>

                {elementFound ? (
                     <button className="btn-add-bag" onClick={removeFromcart}>Remove from bag</button>
                ): (
                    <button className="btn-add-bag" onClick={handleAddTocart}>Add to Bag</button>
                )}
                
                {/* <button className="btn-add-bag" onclick={() => addToBag(item.id)}>Add to Bag</button> */}
            </div>
        </>
    )
}


export default HomeItem;