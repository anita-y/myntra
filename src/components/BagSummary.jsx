import {useSelector} from "react-redux";

const BagSummary = () => {
    const cartIds = useSelector((store) => store.cart);
    const items = useSelector((store) => store.catalog);
    const finalItem = items.filter((item) => {
        return cartIds.indexOf(item.id) >= 0
    });

    const CONVENIENCE_FEE = 99;
    let totalItem = cartIds.length;
    let totalMrp = 0;
    let totalDiscount  = 0;

    finalItem.forEach((item) => {
        totalMrp += item.original_price;
        totalDiscount += item.original_price - item.current_price
    });

    let finalPayment = totalMrp + CONVENIENCE_FEE - totalDiscount;

    return (
        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹{totalMrp}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">
                -₹{totalDiscount}
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">₹99</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">₹{finalPayment}</span>
            </div>
          </div>
          <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
      );

}

export default BagSummary;