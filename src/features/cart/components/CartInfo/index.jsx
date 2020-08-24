import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../cartState";

CartInfo.propTypes = {};

function CartInfo(props) {
    const cart = useRecoilValue(cartState);
    const total = useRecoilValue(cartTotal);

    return (
        <div>
            <h2>CardInfo</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.product.title}: {item.quantity}
                    </li>
                ))}
            </ul>
            <p>TOTAL: {total}</p>
        </div>
    );
}

export default CartInfo;
