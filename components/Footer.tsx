import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-semibold">Exclusive</h3>
          <p className="mt-4 tewhite">Get 10% off your first order</p>
          <div className="mt-4 flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-white px-4 py-2 w-full text-gray-300 focus:outline-none"
            />
            <button className="bg-black border border-white px-4 py-2">➤</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="mt-4 text-white">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mt-2 text-white">exclusive@gmail.com</p>
          <p className="mt-2 text-white">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-white hover:text-white">My Account</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">Login / Register</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">Cart</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">Wishlist</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">Shop</a>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-white hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">Terms Of Use</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">FAQ</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Download App</h3>
          <p className="mt-4 text-gray-400">Save $3 with App New User Only</p>
          <Image
          src="/Qr Code.svg" 
          alt="QR Code"
          width={80}
          height={80}
          className="cursor-pointer"/>
          <div className="mt-4 flex space-x-4">
            <Image
              src="/GooglePlay.svg" 
              alt="Google Play"
              width={120}
              height={40}
              className="cursor-pointer"
            />
            <Image
              src="/AppStore.svg" 
              alt="App Store"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </div>
          <div className="mt-6 flex space-x-4">
            <FaFacebookF className="cursor-pointer hover:text-zinc-400" />
            <FaTwitter className="cursor-pointer hover:text-zinc-400" />
            <FaInstagram className="cursor-pointer hover:text-zinc-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-zinc-400" />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-400 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}