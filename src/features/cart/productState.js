import { atom } from "recoil";

export const productListState = atom({
    key: "productLists",
    default: [
        { id: 1, price: 150000, title: "ao thun nam" },
        { id: 2, price: 350000, title: "quan jean nam" },
        { id: 3, price: 250000, title: "ao khoac nam" },
    ],
});
