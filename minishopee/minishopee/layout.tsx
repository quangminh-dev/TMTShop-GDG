export const metadata = {
  title: "MiniShopee",
  description: "Trang thương mại điện tử mini",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
