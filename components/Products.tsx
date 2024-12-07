import React from "react";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      reviews: "35",
      image: "/dogfood.svg",
      isNew: false,
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      reviews: "95",
      image: "/CANON.svg",
      isNew: false,
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      reviews: "325",
      image: "/laptop.svg",
      isNew: false,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      reviews: "400",
      image: "/chair.svg",
      isNew: false,
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      reviews: "115",
      image: "/kidscar.svg",
      isNew: true,
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      reviews: "35",
      image: "/soccer.svg",
      isNew: false,
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      reviews: "55",
      image: "/USBGamepad.svg",
      isNew: true,
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      reviews: "55",
      image: "/jacket.svg",
      isNew: false,
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-lg font-semibold text-red-500">Our Products</h2>
        <h1 className="text-3xl font-bold my-2">Explore Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={270}
                  height={250}
                  className="object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-red-500 font-bold">{product.price}</p>
                <p className="text-gray-500 text-sm">
                  {product.reviews} reviews
                </p>
                <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Products;
