import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import Badge from "./badge";
import CartMenuWeb from "./cart/CartMenuWeb";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useSelector } from "react-redux";

const NavbarButtonsMain = ({ size }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const cart = useSelector((state) => state.cart);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      setAnchorEl(null);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [anchorEl]);

  useEffect(() => {
    console.log("CART:", cart);
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setTotalItems(total);
  }, [cart]);

  return (
    <React.Fragment>
      <div className="flex gap-2 md:gap-3">
        <IconButton
          sx={{ border: "1px solid #ccc" }}
          className="border border-[#ccc] rounded-full shadow-md"
          aria-describedby="cart-button"
          onClick={handleClick}
        >
          <Badge number={totalItems}>
            <ShoppingCartIcon
              className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"}`}
            />
          </Badge>
        </IconButton>
        <IconButton
          sx={{ border: "1px solid #ccc" }}
          className="border border-[#ccc] rounded-full shadow-md"
        >
          <HomeIcon className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"}`} />
        </IconButton>
        <IconButton
          sx={{ border: "1px solid #ccc" }}
          className="border border-[#ccc] rounded-full shadow-md"
        >
          <EmojiEventsIcon
            className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"}`}
          />
        </IconButton>
        <IconButton
          sx={{ border: "1px solid #ccc" }}
          className="border border-[#ccc] rounded-full shadow-md"
        >
          <PersonIcon className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"}`} />
        </IconButton>
      </div>
      <CartMenuWeb open={open} toggleMenu={handleClose} anchorEl={anchorEl} />
    </React.Fragment>
  );
};

export default NavbarButtonsMain;
