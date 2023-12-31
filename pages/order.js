import { Inria_Sans } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../redux/cartSlice";

const inria_sans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function OrderPage() {
  const [productQty, setProductQty] = useState(1);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += parseInt(item.price.split(",").join("")) * item.quantity;
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    getTotal();
  }, [cart]);

  return (
    <>
      <Head>
        <title>Order Page</title>
      </Head>
      <div
        className={`${inria_sans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-12 md:my-4 lg:my-5 my-1 pb-20 md:pb-0`}
      >
        <div className="flex-1">
          <h2 className="text-xl font-bold lg:text-2xl pb-2">Your Order</h2>
          <div className="shadow rounded-md bg-white">
            <div className="px-4 py-5">
              <div className="flex bg-[#f5f5f7] px-2 py-3 rounded-md">
                <div className="w-[40%]">
                  <Image
                    className="w-[90%] mx-auto h-full"
                    src={"/order/enterprise.webp"}
                    alt={"Enterprise"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="w-[60%] px-2 text-sm">
                  <p className="lg:text-xl">
                    Nipun Enterprise for Cash on Delivery Service
                  </p>
                  <div className="mt-2 font-light lg:text-lg">
                    <p>* Minimum Order</p>
                    <p>
                      Amount <strong className="font-normal">500DBT</strong>
                    </p>
                  </div>
                </div>
              </div>
              {cart.map((item) => (
                <div className="flex mt-3 px-2 py-3 rounded-md">
                  <div className="w-[80px] flex justify-center items-center shadow py-1 h-[90px] rounded-md">
                    <Image
                      className="object-contain p-2 w-full h-full"
                      src={item.image}
                      alt={"Enterprise"}
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="flex-1 pl-3 text-xs lg:px-4">
                    <p className="font-bold lg:text-lg">{item.title}</p>
                    <p className="font-bold mt-1 lg:text-lg">${item.price}</p>
                    <div className="flex mt-2 justify-between">
                      <div className="border lg:text-lg border-[#ccc] rounded-md px-2 py-1">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="pr-3"
                        >
                          -
                        </button>
                        <span className="px-5 border-r border-l border-[#ccc]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="pl-3"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-red-500 lg:text-lg"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 lg:flex-none lg:w-[40%]">
          <h2 className="text-xl font-bold lg:text-2xl pb-2">Order Summary</h2>
          <div className="shadow rounded-md bg-white">
            <div className="flex px-4 py-5 justify-between">
              <p className="text-blue-500 text-lg">
                Nipun Enterprise for Cash on Delivery Service
              </p>
              <p className="min-w-[80px] text-right text-lg">
                $ {7150 * productQty}
              </p>
            </div>
            <hr className="mx-3 border-gray-300" />
            <div className="flex px-4 items-center justify-between mt-3">
              <p>Subtotal</p>
              <p>$ {total}.00</p>
            </div>
            <div className="flex px-4 items-center justify-between mt-3">
              <p className="font-bold text-lg">Total</p>
              <p className="font-bold text-lg">$ {total}.00</p>
            </div>
            <div className="mt-4 flex justify-center pb-5">
              <button className="bg-black text-white py-3 text-lg rounded-md items-center gap-2 w-[95%]">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
