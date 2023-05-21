import { createContext, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
import { data } from "../data/data.js";

export const BagItemsContext = createContext();

export const BagContextProvider = (props) => {
  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const SetItem = (id) => {
    let bagData = JSON.parse(localStorage.getItem("BagItems"));
    const item = data.find((pro) => pro.id == id);
    if (bagData == null) {
      let newBag = [];
      item.quantity = 1;
      newBag.push(item);
      localStorage.setItem("BagItems", JSON.stringify(newBag));
      setBagItems(newBag);
    } else {
      const allItems = [...bagData];
      let condition = false;
      let i = 0;
      let w = 20;
      for (i = 0; i < allItems.length; i++) {
        if (allItems[i].id === id) {
          condition = true;
          w = i;
        }
      }
      if (condition) {
        allItems[w].quantity = allItems[w].quantity + 1;
      } else if (!condition) {
        allItems.push(item);
        allItems[i].quantity = allItems[i].quantity + 1;
      }
      localStorage.setItem("BagItems", JSON.stringify(allItems));
      setBagItems(allItems);
    }
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

  const DeleteItem = (id) => {
    let bagData = JSON.parse(localStorage.getItem("BagItems"));
    const allItems = [];
    let item = bagData.find((item) => item.id === id);
    item.quantity = 0;
    for (let i = 0; i < bagData.length; i++) {
      if (bagData[i].id != id) {
        allItems.push(bagData[i]);
      }
    }
    localStorage.setItem("BagItems", JSON.stringify(allItems));
    setBagItems(allItems);
    TotalPrice();
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
        DeleteItem,
      }}
    >
      {props.children}
    </BagItemsContext.Provider>
  );
};
