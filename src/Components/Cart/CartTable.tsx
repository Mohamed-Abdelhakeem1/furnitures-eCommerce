import {
  addToCart,
  clearCart,
  deleteFromCart,
  reduceOne,
} from "../../Store/CartSlise";
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { Tproduct } from "../../Types/Types";

const CartTable = () => {
  const cartItems: Tproduct[] = useAppSelector((state) => state.CartProducts);
  const totalQtl = cartItems.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  const finalPrice = cartItems.reduce((a, b) => {
    return a + b.totalPrice;
  }, 0);

  const dispatcher = useAppDispatch();

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="main-table relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-md text-gray-800 uppercase bg-blue-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-3 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-1">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product: Tproduct) => (
                <tr key={product.id} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {product.name}
                  </th>
                  <td className="px-2 py-1">
                    <img className="h-20 w-20" src={product.images[0]}></img>
                  </td>
                  <td className="px-3 py-4">$ {product.price}</td>
                  <td className="py-4 mt-2 text-black flex-center gap-2">
                    <button
                      onClick={() => dispatcher(addToCart(product))}
                      className="block text-white  bg-blue-600 py-1 w-6 rounded-sm cursor-pointer"
                    >
                      +
                    </button>
                    <span> {product.quantity}</span>
                    <button
                      onClick={() => dispatcher(reduceOne(product))}
                      className="block text-white  bg-blue-600 py-1 w-6 rounded-sm cursor-pointer"
                    >
                      -
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    $ {product.totalPrice.toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="bg-blue-700 text-white btn"
                      onClick={() => dispatcher(deleteFromCart(product))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold dark:text-white bg-blue-900 text-white">
                <th scope="row" colSpan={3} className="px-6 py-3 text-base">
                  Final for Payment
                </th>
                <td className="px-2 py-3">{totalQtl}</td>
                <td className="px-6 py-3">{finalPrice.toFixed(2)}</td>
                <td>
                  <button
                    className="bg-red-900 btn"
                    onClick={() => dispatcher(clearCart())}
                  >
                    Clear
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className="flex-center flex-col min-h-[50vh]">
          <h1 className="text-3xl text-gray-800">Your Cart is Empty</h1>
          <p className="text-sm text-gray-500">Please add some items...</p>
        </div>
      )}
    </>
  );
};

export default CartTable;
