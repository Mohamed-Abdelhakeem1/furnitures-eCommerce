import { addToCart } from "../Store/CartSlise";
import { useAppDispatch } from "../Store/Store";
import { TProductProps } from "../Types/Types";


const AddCartBtn = ({ product }: TProductProps) => {
  const dispatcher = useAppDispatch();
  return (
    <button
      className="bg-blue-700 hover:bg-blue-600 smooth text-white w-full py-2 cursor-pointer"
      onClick={() => dispatcher(addToCart(product))}
    >
      Add to cart
    </button>
  );
};

export default AddCartBtn;
