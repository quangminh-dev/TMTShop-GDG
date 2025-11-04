"use client";

import { ShoppingBag, Shirt, Watch, HeartPulse, Camera, BookOpen, Dog } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Thời trang nam", icon: <Shirt /> },
    { name: "Thời trang nữ", icon: <Shirt /> },
    { name: "Thiết bị điện tử", icon: <ShoppingBag /> },
    { name: "Mẹ & bé", icon: <HeartPulse /> },
    { name: "Nhà cửa & đời sống", icon: <ShoppingBag /> },
    { name: "Sắc đẹp", icon: <HeartPulse /> },
    { name: "Máy ảnh & máy quay phim", icon: <Camera /> },
    { name: "Sức khỏe", icon: <HeartPulse /> },
    { name: "Đồng hồ", icon: <Watch /> },
    { name: "Giày dép nữ", icon: <ShoppingBag /> },
    { name: "Giày dép nam", icon: <ShoppingBag /> },
    { name: "Túi ví nữ", icon: <ShoppingBag /> },
    { name: "Phụ kiện & trang sức nữ", icon: <HeartPulse /> },
    { name: "Thể thao", icon: <ShoppingBag /> },
    { name: "Du lịch", icon: <ShoppingBag /> },
    { name: "Bách hóa online", icon: <ShoppingBag /> },
    { name: "Nhà sách online", icon: <BookOpen /> },
    { name: "Balo & túi ví nam", icon: <ShoppingBag /> },
    { name: "Thời trang trẻ em", icon: <Shirt /> },
    { name: "Đồ chơi", icon: <ShoppingBag /> },
    { name: "Chăm sóc thú cưng", icon: <Dog /> },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-lime-600 mb-6">Danh mục hàng</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-sm rounded-2xl p-4 hover:bg-lime-50 hover:shadow-md transition cursor-pointer"
          >
            <div className="bg-lime-100 text-lime-600 p-3 rounded-full mb-2">
              {cat.icon}
            </div>
            <span className="text-sm text-gray-800 text-center font-medium">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
