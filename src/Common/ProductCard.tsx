import { FaEye, FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../Store/Store";
import { addToWish, deleteFromWish } from "../Store/WishSlice";
import AddCartBtn from "./AddCartBtn";
import { IoHeartDislike } from "react-icons/io5";
import { show } from "../Store/ReviewSlice";
import { Tproduct, TProductProps } from "../Types/Types";

const ProductCard = ({ product }: TProductProps) => {
  const wishItems: Tproduct[] = useAppSelector((state) => state.WishProducts);
  const dispatcher = useAppDispatch();
  const isLiked = wishItems.find(({ id }) => id === product.id);
  return (
    <div className="product-card flex-center flex-col border w-60 border-gray-400 shadow-2xl overflow-hidden rounded-lg relative">
      <div className="h-50 flex-center overflow-hidden">
        <img
          className=" object-cover"
          src={product.images[0]}
          alt={product.category}
        ></img>
      </div>
      <div className="mt-1 text-center">
        <h2 className="text-lg text-blue-900 font-bold">{product.name}</h2>
        <h3 className="text-lg">
          <span className="text-sm">$ </span>
          {product.price}
        </h3>
      </div>
      <AddCartBtn product={product} />
      <div className="heart absolute top-15 text-xl smooth">
        <button
          onClick={() => dispatcher(show(product))}
          className="bg-blue-700 hover:bg-blue-600 smooth text-white p-2  rounded-l-lg mb-2 block cursor-pointer"
        >
          <FaEye />
        </button>
        {isLiked ? (
          <button
            onClick={() => dispatcher(deleteFromWish(product))}
            className="bg-blue-700 hover:bg-blue-600 smooth text-white p-2  rounded-l-lg block cursor-pointer"
          >
            <IoHeartDislike />
          </button>
        ) : (
          <button
            onClick={() => dispatcher(addToWish(product))}
            className="bg-blue-700 hover:bg-blue-600 smooth text-white p-2  rounded-l-lg block cursor-pointer"
          >
            <FaHeart />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
