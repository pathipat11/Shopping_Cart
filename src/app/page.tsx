"use client";

import React, { useState } from "react";
import ItemCart from "./item-cart";
import styles from "./cart.module.css";
import { Typography, Stack } from "@mui/material";

// Function to format price with comma separators
const formatPrice = (price: number) => {
  return price.toLocaleString("th-TH", { style: "currency", currency: "THB" });
};

export default function Home() {
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Handle price change when item quantity changes
  const handlePriceChange = (priceChange: number) => {
    setTotal(total + priceChange);
    setTotalQuantity(totalQuantity + (priceChange > 0 ? 1 : -1));
  };

  const myItems = [
    { itemname: "iPhone 15 Pro", price: 41900, imageUrl: "/images/iphone-15-pro.png" },
    { itemname: "iPhone 15", price: 32900, imageUrl: "/images/iphone-15.png" },
    { itemname: "iPad Pro", price: 32900, imageUrl: "/images/ipad-pro.png" },
    { itemname: "iPad Air", price: 20900, imageUrl: "/images/ipad-air.png" },
    { itemname: "iPad", price: 17900, imageUrl: "/images/ipad.png" },
    { itemname: "iPad mini", price: 20900, imageUrl: "/images/ipad-mini.png" },
    { itemname: "MacBook Air", price: 41900, imageUrl: "/images/macbookair.png" },
    { itemname: "MacBook Pro", price: 56900, imageUrl: "/images/macbookpro.png" },
    { itemname: "iMac", price: 45900, imageUrl: "/images/imac.png" },
    { itemname: "Mac mini", price: 20900, imageUrl: "/images/macmini.png" },
    { itemname: "Mac Studio", price: 73900, imageUrl: "/images/macstudio.png" },
  ];

  return (
    <div className={styles.container}>
      <Typography variant="h4" component="h1" className={styles.title}>
        Shopping Cart
      </Typography>
      <div className={styles.itemsList}>
        {myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            itemImage={item.imageUrl}
            handlePriceChange={handlePriceChange}
          />
        ))}
      </div>
      <Stack direction="row" spacing={2} className={styles.totalContainer}>
        <Typography variant="h6">Total Quantity: {totalQuantity}</Typography>
        <Typography variant="h6">Total: {formatPrice(total)}</Typography>
      </Stack>
    </div>
  );
}
