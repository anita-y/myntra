import Footer from "./Footer";
import Header from "./Header";
import { useSelector} from "react-redux";

const Cart = ({item}) => {
    return (
        <>
            <Header />
            <main>
            <div className="bag-page">
                <div className="bag-items-container"></div>
                <div className="bag-summary"></div>
                    {item}
            </div>
            </main>
            <Footer />
        
        </>
    )

}

export default Cart