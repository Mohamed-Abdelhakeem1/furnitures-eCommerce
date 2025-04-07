import { FaEye } from "react-icons/fa";
import { deleteFromWish } from "../../Store/WishSlice";
import { useAppDispatch } from "../../Store/Store";
import { IoHeartDislike } from "react-icons/io5";
import AddCartBtn from "../../Common/AddCartBtn";
import { show } from "../../Store/ReviewSlice";
import { TProductProps } from "../../Types/Types";

const WishItem = ({ product }: TProductProps) => {
  const dispatcher = useAppDispatch();
  return (
    <div className="product-card text-center flex-center flex-col border border-gray-400 shadow-2xl overflow-hidden rounded-lg relative">
      <div className="w-60 text-center h-50 flex-center">
        <img
          src={product.image_path}
          alt={product.name}
          className="mx-auto object-cover w-60 h-50"
        ></img>
      </div>
      <div className="p-1">
        <h2 className="text-xl text-blue-900 font-bold">{product.name}</h2>
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
        <button
          onClick={() => dispatcher(deleteFromWish(product))}
          className="bg-blue-700 hover:bg-blue-600 smooth text-white p-2  rounded-l-lg block cursor-pointer"
        >
          <IoHeartDislike />
        </button>
      </div>
    </div>
  );
};

export default WishItem;
