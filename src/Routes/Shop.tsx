import ProductCard from "../Common/ProductCard";
import FetchData from "../Hooks/FetchData";
import { Tproduct } from "../Types/Types";

const Shop = () => {
  const order:string = "products"
  const products = FetchData(order);
  return (
    <section className="py-8">
      <div className="contain">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-5">
          Mohamed Our Products
        </h2>
        <div className="flex-center flex-wrap gap-3">
          {products?.length > 0 ? (
            products.map((product: Tproduct) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h1>Loading Products</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
