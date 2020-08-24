import React from "react";
import ProductList from "./components/ProductList";
import CartInfo from "./components/CartInfo";

function Cart() {
    return (
        <div>
            <ProductList />
            <CartInfo />
        </div>
    );
}

export default Cart;
