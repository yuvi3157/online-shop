import React, { useEffect } from "react";
import Slider from "react-slick"; // Import React-Slick
import { Categories, mockData } from "../assets/mockData"; // Ensure Categories is defined
import bag from "../assets/Images/bag.jpg";
import boyShirt from "../assets/Images/boyshirt.jpg";
import gal1 from "../assets/Images/gal1.jpg";
import kid from "../assets/Images/kid.png";
import InfoSection from "../components/InfoSection";
import { CategorySection } from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { Shop } from "./Shop";
// Product data array
// Renaming the local products array to avoid collision
const localProducts = [
  { id: 1, name: "item 1", image: bag },
  { id: 2, name: "item 2", image: boyShirt },
  { id: 3, name: "item 3", image: gal1 },
  { id: 4, name: "item 4", image: kid },
];

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // Access product data from the store

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-8 lg:px-40 mt-2">
        <div className="container mx-auto flex flex-col md:flex-row py-10 space-y-8 md:space-y-0 md:space-x-8">
          {/* Categories Section */}
          <div className="w-full md:w-3/12 bg-white border border-gray-300 rounded-lg shadow-lg p-6 min-h-[400px] flex flex-col">
            <h2 className="bg-red-600 text-white font-bold text-sm uppercase px-4 py-4 rounded-t-lg">
              Shop by Categories
            </h2>
            <ul className="mt-4 space-y-4">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-sm hover:text-red-600 cursor-pointer transition"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-3"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Section with Product Slider */}
          <div className="w-full md:w-9/12 bg-gray-100 rounded-lg shadow-lg flex flex-col md:flex-row items-center min-h-[500px]">
            {/* Welcome Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left px-16 py-20">
              <p className="text-sm text-gray-600">Your trusted online store</p>
              <h1 className="text-4xl font-bold text-gray-800 mt-2">
                Welcome to E-Shop
              </h1>
              <p className="text-lg text-gray-600 mt-3">Million+ Products</p>
              <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition">
                Shop Now
              </button>
            </div>

            {/* Product Slider Section */}
            <div className="w-full md:w-4/6 px-10 py-10">
              <Slider {...sliderSettings}>
                {localProducts.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105 transition-transform"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="mt-3 text-center text-sm font-medium text-gray-700">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center ">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cusrsor pointer">
            {products?.products?.slice(0, 5).map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
        <Shop />
      </div>
     
    </div>
  );
};
