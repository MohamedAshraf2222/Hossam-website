import { createContext, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
import { data } from "../data/data.js";

export const BagItemsContext = createContext();

export const BagContextProvider = (props) => {
  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const SetItem = (id) => {
    const item = data.find((pro) => pro.id == id);
    const allItems = [...bagItems];
    let condition = false;
    let i = 0;
    for (i = 0; i < allItems.length; i++) {
      if (allItems[i].id === id) {
        condition = true;
      }
    }
    if (condition) {
      allItems[i - 1].quantity = allItems[i - 1].quantity + 1;
    } else if (!condition) {
      allItems.push(item);
      allItems[i].quantity = allItems[i].quantity + 1;
    }
    localStorage.setItem("BagItems", JSON.stringify(allItems));
    setBagItems(allItems);
    // TotalPrice()
    // ItemsNumbers();
  };

  const TotalPrice = () => {
    let total = 0;
    if (localStorage.getItem("BagItems")) {
      let bagData = JSON.parse(localStorage.getItem("BagItems"));
      for (let i = 0; i < bagData.length; i++) {
        total = total + bagData[i].price * bagData[i].quantity;
      }
      total = Math.round(total * 100) / 100;
      setTotalPrice(total);
    }
  };

  const SaveItems = () => {
    const item = JSON.parse(localStorage.getItem("BagItems"));
    setBagItems(item);
  };

  return (
    <BagItemsContext.Provider
      value={{
        SaveItems,
        TotalPrice,
        totalPrice,
        SetItem,
        bagItems,
      }}
    >
      {props.children}
    </BagItemsContext.Provider>
  );
};
