"use client";
import React from "react";

const allProducts = [
  {
    id: 1,
    name: "Áo thun nam cổ tròn",
    price: "199.000₫",
    image: "/products/shirt-men.jpg",
  },
  {
    id: 2,
    name: "Đầm nữ xòe tay ngắn",
    price: "329.000₫",
    image: "/products/dress-women.jpg",
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth Pro",
    price: "549.000₫",
    image: "/products/earbuds.jpg",
  },
  {
    id: 4,
    name: "Xe điều khiển từ xa cho bé",
    price: "299.000₫",
    image: "/products/toy-car.jpg",
  },
  {
    id: 5,
    name: "Bình giữ nhiệt cao cấp",
    price: "159.000₫",
    image: "/products/bottle.jpg",
  },
  {
    id: 6,
    name: "Giày sneaker nam trắng",
    price: "459.000₫",
    image: "/products/sneaker.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 cursor-pointer border border-lime-100"
          >
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-800 line-clamp-2">
              {item.name}
            </h3>
            <p className="mt-1 text-lime-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
