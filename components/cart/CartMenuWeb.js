import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import Button from "../Button";
import MenuPopover from "../MenuPopover";
import CartItem from "./CardItem";
import MenuAnchor from "../MenuAnchor";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const CartMenuWeb = ({ open, toggleMenu, anchorEl }) => {
  const cart = useSelector((state) => state.cart);
  const [totalItems, setTotalItems] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("CART:", cart);
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setTotalItems(total);
  }, [cart]);
  return (
    <>
      {/* <MenuPopover
        id={open ? 'cart-menu' : undefined}
        anchorEl={anchorEl}
        open={open}
        onClose={toggleMenu}
        MenuListProps={{
          'aria-labelledby': 'cart-button',
        }}
      >
        <div className='bg-white'>
          <h5 className='px-4 py-3 text-lg font-bold border-b border-slate-200'>
            Cart Items
          </h5>
          <ul role='list' class='p-6 divide-y divide-slate-200'>
          <li class='flex py-4 first:pt-0 last:pb-0'>
            <img class='h-10 w-10' src='/order/product.jpg' alt='' />
            <div class='ml-3 overflow-hidden'>
              <p class='text-sm font-medium text-slate-900 '>
                Samgsung Galaxy Note 8
              </p>
              <p class='text-sm font-semibold truncate'> $1022 X 1</p>
            </div>
          </li>
        </ul>
          <Box
            className='max-h-[330px] flex flex-col gap-1 overflow-y-auto'
            width='350px'
            maxHeight='400'
          >
            <CartItem
              prod='Samgsung Galaxy Note 8'
              price='1022'
              quantity='1'
              img='/order/product.jpg'
            />
            <CartItem
              prod='Samgsung Galaxy Note 8'
              price='1022'
              quantity='1'
              img='/order/product.jpg'
            />
            <CartItem
              prod='Samgsung Galaxy Note 8'
              price='1022'
              quantity='1'
              img='/order/product.jpg'
            />
            <CartItem
              prod='Samgsung Galaxy Note 8'
              price='1022'
              quantity='1'
              img='/order/product.jpg'
            />
          </Box>
          <div className='px-4 py-4  border-t border-slate-200'>
            <Button className='w-full' color='bg-black' title='Checkout' />
          </div>
        </div>
      </MenuPopover> */}
      <Menu
        id="cart-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={toggleMenu}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "cart-button",
          sx: {
            borderRadius: "5px",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            overflow: "inherit",
            borderRadius: "5px",
            border: "1px solid #c5c5c5",
            marginTop: "0.425rem",
          },
        }}
        sx={{
          "& ul": {
            paddingBlock: "0 !important",
          },
        }}
      >
        <MenuAnchor />
        <div className="bg-white overflow-hidden rounded-t">
          <h5 className="px-4 py-3 text-lg font-bold border-b border-slate-200">
            Cart Items
          </h5>
          {/* <ul role='list' class='p-6 divide-y divide-slate-200'>
            <li class='flex py-4 first:pt-0 last:pb-0'>
              <img class='h-10 w-10' src='/order/product.jpg' alt='' />
              <div class='ml-3 overflow-hidden'>
                <p class='text-sm font-medium text-slate-900 '>
                  Samgsung Galaxy Note 8
                </p>
                <p class='text-sm font-semibold truncate'> $1022 X 1</p>
              </div>
            </li>
          </ul> */}
          <Box
            className="max-h-[330px] flex flex-col gap-1 overflow-y-auto"
            width="350px"
            maxHeight="400"
          >
            {cart[0] == undefined ? (
              <Typography className="text-center text-gray-500 py-24">
                No items in cart
              </Typography>
            ) : null}
            {cart.map((item) => (
              <CartItem
                id={item.id}
                prod={item.title}
                price={item.price}
                quantity={item.quantity}
                img={item.image}
              />
            ))}
          </Box>
          <div className="px-4 py-4  border-t border-slate-200">
            <Button onClick={()=>router.push('/order')} disabled={cart[0] == undefined} className="w-full" color="bg-black" title="Checkout" />
          </div>
        </div>
      </Menu>
    </>
  );
};

export default CartMenuWeb;
