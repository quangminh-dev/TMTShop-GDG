"use client";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lime-50 mt-16 border-t border-lime-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Phần trên: Logo và thông tin công ty */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          {/* Logo lớn bên trái */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="relative w-64 h-32">
              <Image
                src="/logo.png"
                alt="MiniShopee Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Thông tin công ty bên phải */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-800 font-semibold text-lg mb-2">
              Công ty TNHH TMT Việt Nam
            </p>
            <p className="text-gray-600 text-sm mb-1">MST: 0123456789</p>
            <p className="text-gray-600 text-sm mb-1">
              Địa chỉ: Đại học Bách Khoa Hà Nội
            </p>
            <p className="text-gray-600 text-sm">
              Hotline:{" "}
              <span className="text-lime-700 font-medium">1900 1234</span> | Email:{" "}
              <span className="text-lime-700 font-medium">tmttnhh@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Liên kết mạng xã hội */}
        <div className="flex justify-center space-x-5 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            className="p-2 bg-white rounded-full shadow hover:bg-lime-100 transition"
          >
            <Facebook size={22} className="text-lime-700" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="p-2 bg-white rounded-full shadow hover:bg-lime-100 transition"
          >
            <Instagram size={22} className="text-lime-700" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            className="p-2 bg-white rounded-full shadow hover:bg-lime-100 transition"
          >
            <Music size={22} className="text-lime-700" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="p-2 bg-white rounded-full shadow hover:bg-lime-100 transition"
          >
            <Youtube size={22} className="text-lime-700" />
          </a>
        </div>

        {/* Dòng bản quyền cuối */}
        <div className="text-center text-gray-500 text-sm border-t border-lime-200 pt-4">
          © 2025 TMT Việt Nam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
