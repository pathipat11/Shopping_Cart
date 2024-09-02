import React, { useState } from "react";
import { IconButton, Typography, Stack, Card, CardContent, CardMedia, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import styles from "./cart.module.css";

// Function to format price with comma separators
const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", { style: "currency", currency: "THB" });
};

export default function ItemCart({
  itemname,
  itemPrice,
  itemImage,
  handlePriceChange,
}: {
  itemname: string;
  itemPrice: number;
  itemImage: string;
  handlePriceChange: (priceChange: number) => void;
}) {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    const newTotalPrice = newCount * itemPrice;
    setCount(newCount);
    setTotalPrice(newTotalPrice);
    handlePriceChange(itemPrice);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      const newTotalPrice = newCount * itemPrice;
      setCount(newCount);
      setTotalPrice(newTotalPrice);
      handlePriceChange(-itemPrice);
    }
  };

  return (
    <Card className={styles.card}>
      <CardMedia className={styles.media}>
        <Image src={itemImage} alt={itemname} width={150} height={150} className={styles.productImage} />
      </CardMedia>
      <CardContent className={styles.cardContent}>
        <Typography variant="h6" className={styles.itemName}>
          {itemname}
        </Typography>
        <Typography variant="body2" color="textSecondary" className={styles.mainPrice}>
          Price: {formatPrice(itemPrice)}
        </Typography>
        <Typography variant="body2" className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="body2" color="textSecondary" className={styles.priceText}>
          Total: {formatPrice(totalPrice)}
        </Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <IconButton onClick={handleRemoveItemClick} disabled={count === 0}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{count}</Typography>
        <IconButton onClick={handleAddItemClick}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
