import React, { useEffect, useState } from "react";
//Cards Components Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//==========================
//import data of cards
import data from "../product-list-with-cart-main/data.json";
//=======================
//import Images of Cards Item
import baklwa from "../product-list-with-cart-main/assets/images/image-baklava-tablet.jpg";
import waffle from "../product-list-with-cart-main/assets/images/image-waffle-tablet.jpg";
import brwon from "../product-list-with-cart-main/assets/images/image-brownie-tablet.jpg";
import banana from "../product-list-with-cart-main/assets/images/image-panna-cotta-tablet.jpg";
import meringue from "../product-list-with-cart-main/assets/images/image-meringue-tablet.jpg";
import cake from "../product-list-with-cart-main/assets/images/image-cake-tablet.jpg";
import macrona from "../product-list-with-cart-main/assets/images/image-macaron-tablet.jpg";
import creme from "../product-list-with-cart-main/assets/images/image-creme-brulee-tablet.jpg";
import tramusie from "../product-list-with-cart-main/assets/images/image-tiramisu-tablet.jpg";
//---------------------------------------
export default function CardItem({ onValueChange, onDataUpdate }) {
  const dataOfCards = [...data];
  function getCategory(cat) {
    if (cat === "Waffle") {
      return waffle;
    } else if (cat === "Crème Brûlée") {
      return creme;
    } else if (cat === "Macaron") {
      return macrona;
    } else if (cat === "Tiramisu") {
      return tramusie;
    } else if (cat === "Baklava") {
      return baklwa;
    } else if (cat === "Pie") {
      return meringue;
    } else if (cat === "Cake") {
      return cake;
    } else if (cat === "Brownie") {
      return brwon;
    } else if (cat === "Panna Cotta") {
      return banana;
    }
  }
  //Data of Each Item
  const [dataItems, setDataItems] = useState([
    { key: "1", name: "Waffle with Berries", price: "6.50", count: 0 },
    { key: "2", name: "Vanilla Bean Crème", price: "7.00", count: 0 },
    { key: "3", name: "Macaron Mix of Five", price: "8.00", count: 0 },
    { key: "4", name: "Classic Tiramisu", price: "5.50", count: 0 },
    { key: "5", name: "Pistachio Baklava", price: "4.00", count: 0 },
    { key: "6", name: "Lemon Meringue Pie", price: "5.00", count: 0 },
    { key: "7", name: "Red Velvet Cake", price: "4.50", count: 0 },
    { key: "8", name: "Salted Caramel Brownie", price: "4.50", count: 0 },
    { key: "9", name: "Vanilla Panna Cotta", price: "6.50", count: 0 },
  ]);

  const [countItem, setCountItem] = useState({
    itemOne: 0,
    itemTwo: 0,
    itemThree: 0,
    itemFour: 0,
    itemFive: 0,
    itemSix: 0,
    itemSeven: 0,
    itemEight: 0,
    itemNine: 0,
  });

  function IncrementItem(key) {
    const updatedDataItems = dataItems.map((item) => {
      if (item.key === key) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    setDataItems(updatedDataItems);

    switch (key) {
      case "1":
        setCountItem({ ...countItem, itemOne: countItem.itemOne + 1 });
        break;
      case "2":
        setCountItem({ ...countItem, itemTwo: countItem.itemTwo + 1 });
        break;
      case "3":
        setCountItem({ ...countItem, itemThree: countItem.itemThree + 1 });
        break;
      case "4":
        setCountItem({ ...countItem, itemFour: countItem.itemFour + 1 });
        break;
      case "5":
        setCountItem({ ...countItem, itemFive: countItem.itemFive + 1 });
        break;
      case "6":
        setCountItem({ ...countItem, itemSix: countItem.itemSix + 1 });
        break;
      case "7":
        setCountItem({ ...countItem, itemSeven: countItem.itemSeven + 1 });
        break;
      case "8":
        setCountItem({ ...countItem, itemEight: countItem.itemEight + 1 });
        break;
      case "9":
        setCountItem({ ...countItem, itemNine: countItem.itemNine + 1 });
        break;
      default:
        break;
    }
  }
  function DecrementItem(key) {
    const updatedDataItems = dataItems.map((item) => {
      if (item.key === key) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });

    setDataItems(updatedDataItems);

    switch (key) {
      case "1":
        setCountItem({ ...countItem, itemOne: countItem.itemOne - 1 });
        break;
      case "2":
        setCountItem({ ...countItem, itemTwo: countItem.itemTwo - 1 });
        break;
      case "3":
        setCountItem({ ...countItem, itemThree: countItem.itemThree - 1 });
        break;
      case "4":
        setCountItem({ ...countItem, itemFour: countItem.itemFour - 1 });
        break;
      case "5":
        setCountItem({ ...countItem, itemFive: countItem.itemFive - 1 });
        break;
      case "6":
        setCountItem({ ...countItem, itemSix: countItem.itemSix - 1 });
        break;
      case "7":
        setCountItem({ ...countItem, itemSeven: countItem.itemSeven - 1 });
        break;
      case "8":
        setCountItem({ ...countItem, itemEight: countItem.itemEight - 1 });
        break;
      case "9":
        setCountItem({ ...countItem, itemNine: countItem.itemNine - 1 });
        break;
      default:
        break;
    }
  }
  //Alter the List Card when added the item to the card
  const [countValue, setCountValue] = useState(0);
  useEffect(() => {
    let sum = 0;
    sum += countItem.itemOne;
    sum += countItem.itemTwo;
    sum += countItem.itemThree;
    sum += countItem.itemFour;
    sum += countItem.itemFive;
    sum += countItem.itemSix;
    sum += countItem.itemSeven;
    sum += countItem.itemEight;
    sum += countItem.itemNine;
    setCountValue(sum);
    onValueChange(sum);
    onDataUpdate(dataItems);
  }, [countItem]);
  const MapOfCards = dataOfCards.map((item) => {
    return (
      <Card className="card-width" sx={{ margin: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={getCategory(item.category)}
          alt={`${item.name}`}
        />
        <Button
          size="medium"
          style={{
            color: "#e75303",
            backgroundColor: "white",
            border: "2px #e75303 solid",
          }}
          className="button-card"
          onClick={() => IncrementItem(item.keyID )}
          key={item.keyID}
        >
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
              className="svg-cart"
            >
              <g fill="#C73B0F" clip-path="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>{" "}
            </svg>
            +
          </>
        </Button>
        <Button
          size="medium"
          style={{
            color: "#e75303",
            backgroundColor: "white",
            border: "2px #e75303 solid",
            margin: 2,
          }}
          className="button-card"
          onClick={() => DecrementItem(item.keyID)}
          key={item.keyID}
        >
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
              className="svg-cart"
            >
              <g fill="#C73B0F" clip-path="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>{" "}
            </svg>
            -
          </>
        </Button>
        <CardContent>
          <Typography
            fontSize={16}
            style={{ color: "gray" }}
            gutterBottom
            component="div"
          >
            {item.category}
          </Typography>
          <Typography
            fontSize={16}
            fontWeight={800}
            fontFamily="RedHatText2"
            variant="body1"
          >
            {item.name}
          </Typography>
          <Typography
            style={{ fontSize: 18, color: "#e75303", fontWeight: "400" }}
            variant="caption"
          >
            {item.price}$
          </Typography>
        </CardContent>
      </Card>
    );
  });
  return <div className="cards-style">{MapOfCards}</div>;
}
