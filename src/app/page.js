
import Link from "next/link";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeCarousel from "./components/HomeCarousel";

export default function Home() {


	return (
		<>
			<Header />

			<HomeCarousel />

			<div className="py-10 container mx-auto">
				<h3 className="text-4xl font-bold text-slate-700 mb-6">Categories</h3>

				<Categories />
			</div>

			<div className="py-10 container mx-auto">
				<div className="flex items-center justify-between mb-6 gap-3">
					<h3 className="text-4xl font-bold text-slate-700">Featured Products</h3>

					<Link href={`product-list/all`}>
						<button className="px-6 py-2 bg-primary">Show All</button>
					</Link>
				</div>

				<FeaturedProducts />
			</div>

			<Footer />
		</>
	);
}
