"use client";

export default function Banner() {
  return (
    <section className="w-full flex gap-4 mt-6 px-6">
      <div className="flex-1 bg-green-200 rounded-2xl h-[400px] flex items-center justify-center text-green-900 font-bold text-3xl shadow-md">
        Banner Chính
      </div>

      <div className="flex flex-col gap-4 w-[30%]">
        <div className="bg-green-100 rounded-2xl h-[190px] flex items-center justify-center text-green-800 font-semibold text-xl shadow">
          Banner Nhỏ 1
        </div>
        <div className="bg-green-100 rounded-2xl h-[190px] flex items-center justify-center text-green-800 font-semibold text-xl shadow">
          Banner Nhỏ 2
        </div>
      </div>
    </section>
  );
}
