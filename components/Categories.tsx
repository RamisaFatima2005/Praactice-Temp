import React from "react";
import Image from "next/image";

type Category = {
  id: number;
  name: string;
  icon: string; 
  isActive: boolean;
};

const Categories = () => {
  const categories: Category[] = [
    { id: 1, name: "Phones", icon: "/Category-CellPhone.svg", isActive: false },
    { id: 2, name: "Computers", icon: "/Category-Computer.svg", isActive: false },
    { id: 3, name: "SmartWatch", icon: "/Category-SmartWatch.svg", isActive: false },
    { id: 4, name: "Camera", icon: "/Category-Camera.svg", isActive: false },
    { id: 5, name: "HeadPhones", icon: "/Category-Headphone.svg", isActive: false },
    { id: 6, name: "Gaming", icon: "/Category-Gamepad.svg", isActive: false },
  ];

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-[#DB4444] w-[64] h-[20] ">Categories</h1>
        <br/>
        <p className="text-black font-semibold space-x-5 text-3xl">Browse by categories</p>
        <br/>

      <div className="flex justify-center space-x-4 overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center border p-4 w-[170] h-[145] transition-all ${
              category.isActive
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-gray-800 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500"
            }`}
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={270}
              height={250} 
            />
            <p className="text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
