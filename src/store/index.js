import { configureStore} from "@reduxjs/toolkit"
import catalogSlice from "./catalog";
import cartSlice from "./cartSlice";

const myntraStore = configureStore({
    reducer : {
        catalog: catalogSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default myntraStore;