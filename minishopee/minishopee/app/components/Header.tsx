"use client";
import { useEffect, useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white shadow-md border-b border-lime-100"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="MiniShopee Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="text-2xl font-extrabold text-lime-600">
            MiniShopee
          </span>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-10">
          <div className="flex items-center border-2 border-lime-400 rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none"
            />
            <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-5 py-2 rounded-full transition">
              Tìm kiếm
            </button>
          </div>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center space-x-5">
          <button className="hover:text-lime-600 transition">
            <User size={22} />
          </button>
          <button className="hover:text-lime-600 transition relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
