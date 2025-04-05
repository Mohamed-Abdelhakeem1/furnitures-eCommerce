import ProductCard from "../../Common/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useFetchData from "../../Hooks/FetchData";
import { Tproduct } from "../../Types/Types";

const Features = () => {
  const order: string = "products";
  const products = useFetchData(order);
  return (
    <section className="py-4">
      <div className="contain">
        <h2 className="text-center text-4xl font-bold text-blue-900">
          Features
        </h2>
        <p className="text-center mb-5 italic text-orange-700">
          Discover our products
        </p>
        <div className="flex-center flex-wrap gap-3">
          {products.length > 0 ? (
            products.slice(0,4).map((product: Tproduct) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h1>Loading Products</h1>
          )}
        </div>
        <Link to="/shop" className="w-fit px-12 py-2 bg-blue-700 text-white rounded-sm cursor-pointer flex-center gap-3 mx-auto mt-6 smooth hover:bg-blue-600">
          View More <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
};

export default Features;
