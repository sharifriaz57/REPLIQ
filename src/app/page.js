import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeCarousel from "./components/HomeCarousel";

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-200">
			<Header />

			<HomeCarousel />

			<div className="py-10 container mx-auto">
				<h3 className="text-4xl font-bold text-slate-700 mb-6">Categories</h3>

				<Categories />
			</div>

			<div className="py-10 container mx-auto">
				<h3 className="text-4xl font-bold text-slate-700 mb-6">Featured Products</h3>

				<FeaturedProducts />
			</div>

			<Footer />
		</main>
	);
}
