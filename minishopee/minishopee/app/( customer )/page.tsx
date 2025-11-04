import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main >
      <Header />
      <Banner />
      <Categories />
      <ProductGrid />
      <Footer />
    </main>
  );
}
