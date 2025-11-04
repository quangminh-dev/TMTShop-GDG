import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        
        <main className="flex-1 pt-20 bg-white">{children}</main>
        
      </body>
    </html>
  );
}
