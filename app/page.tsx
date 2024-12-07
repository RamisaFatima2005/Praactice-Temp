import Link from "next/link";
import Image from "next/image";
import FlashSales from "@/components/Flashsales";
import Categories from "@/components/Categories";
import HomePage from "@/components/Home";
import Products from "@/components/Products";
import NewArrival from "@/components/NewArrival";
import BestSellingProd from "@/components/BestSellingProd";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <FlashSales/>
      <Categories/>
      <BestSellingProd/>
      <Products/>
      <NewArrival/>
      <Footer/>
    </div>
  );
}
