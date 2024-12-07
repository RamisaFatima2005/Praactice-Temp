import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  return (
    <div>
      <div className="bg-black text-white flex justify-center">
        Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!<b><u className="white">Shop Now</u></b>
      </div>
      <div className="flex space-x-10 justify-between p-4">
      <div>
        <h1><b>Exclusive</b></h1>
        </div>
      <nav>
        <ul className="flex space-x-10">
          <li><Link href={"#"}>Home</Link></li>
          <li><Link href={"#"}>Contact</Link></li>
          <li><Link href={"#"}>About</Link></li>
          <li><Link href={"#"}>Signup</Link></li>
        </ul>
      </nav>
      <div className="flex space-x-5">
      <Image src="/Search Component Set.svg" alt="Search"  width={243} height={38}/>
        <Image src="/Cart1 with buy.svg" alt="Cart"  width={32} height={32}/>
        <Image src="/Wishlist.svg" alt="Wishlist"  width={32} height={32}/>
      </div>
      </div>
      <hr/>
      <div  className="px-10 py-5 justify-around flex items-around space-x-24">
      <ul className="space-y-2">
        <li>Women&apos;s Fashion</li>
        <li>Men&apos;s Fashion</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby&apos;s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
        </ul>
        <Image src="/Frame 560.svg" alt="Landingpage" width={892} height={344}/>
      </div>
    </div>
  );
}
