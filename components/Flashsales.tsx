import React from "react";
import Image from "next/Image";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  rating: number;
  discount: number;
  image: string;
};

const FlashSales= () => {
  const timeLeft = {
    days: 3,
    hours: 2,
    minutes: 19,
    seconds: 56,
  };

  const products: Product[] = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 88,
      discount: 40,
      image: "/gamepad.svg",
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 75,
      discount: 35,
      image: "/keyboard.svg",
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 480,
      rating: 99,
      discount: 30,
      image: "/gamingmonitor.svg",
    },
    {
      id: 4,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 480,
      rating: 99,
      discount: 25,
      image: "/chair.svg",
    },
  ];

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-[#DB4444] w-[64] h-[20] ">Today&apos;s</h1>
        <br/>
      <header className="text-center mb-6 flex space-x-12">
        <p className="text-black font-[#36PX] font-semibold space-x-5 text-3xl">Flash Sales</p>
        {/* Static Countdown Timer */}
      <div className="flex justify-between mb-6">
        <div className="flex space-x-4 text-between">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label}>
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
      </header>


      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-4 shadow-sm">
            <Image
              src={product.image}
              alt={product.title}
              height={500}
              width={500}
              className="w-full mb-4"
            />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-500 line-through">${product.oldPrice}</p>
            <p className="text-red-500 font-bold">${product.price}</p>
            <p className="text-sm text-gray-400">
              ⭐ {product.rating} reviews • {product.discount}% off
            </p>
            <button className="mt-2 bg-black text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
