import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
};

const BestSellingProd= () => {

  const products: Product[] = [
    {
      id: 1,
      title: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: 65,
      image: "/coat.svg",
    },
    {
      id: 2,
      title: "Gucci duffle bag ",
      price: 960,
      oldPrice: 1160,
      rating: 65,
      image: "/bag.svg",
    },
    {
      id: 3,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 65,
      image: "/CPUCooler.svg",
    },
    {
      id: 4,
      title: "Small BookShelf",
      price: 360,
      oldPrice: 400,
      rating: 65,
      image: "/bookshelf.svg",
    },
  ];

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-[#DB4444] w-[64] h-[20] ">This Month</h1>
        <br/>
      <header className="text-center mb-6 flex space-x-12">
        <p className="text-black font-[#36PX] font-semibold space-x-5 text-3xl">Best Selling Products</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-4 shadow-sm">
            <Image
              src={product.image}
              alt={product.title}
              width={270}
              height={250}
            />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-500 line-through">${product.oldPrice}</p>
            <p className="text-[#DB4444] font-bold">${product.price}</p>
            <p className="text-sm text-gray-400">
              ⭐⭐⭐⭐⭐ {product.rating} reviews 
            </p>
            <button className="mt-2 bg-black text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-[#DB4444] text-white px-6 py-3 rounded-lg">
          View All Products
        </button>
      </div>
      <div className="p-20">
      <Image src="/Frame 600.svg" alt="Frame" width={1170} height={500}/>
      </div>
    </div>
  );
};

export default BestSellingProd;
