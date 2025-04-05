import React from "react";
import WishItem from "../Components/Wish/WishItem";
import { useAppDispatch, useAppSelector } from "../Store/Store";
import { clearWish } from "../Store/WishSlice";
import { Tproduct } from "../Types/Types";

const Wishlist = () => {
  const wishItems: Tproduct[] = useAppSelector((state) => state.WishProducts);
  const dispatcher = useAppDispatch();
  return (
    <section className="cart-section">
      <div className="contain mb-8">
        <h2 className="mx-auto font-bold w-fit text-3xl py-5 text-blue-900">
          My Wishlist
        </h2>
        {wishItems.length > 0 ? (
          <button
            className="btn bg-red-500 text-white block mx-auto mb-4"
            onClick={() => dispatcher(clearWish())}
          >
            Clear All
          </button>
        ) : null}
        <div className="flex-center flex-wrap gap-3">
          {wishItems.length > 0 ? (
            wishItems.map((product: Tproduct) => (
              <WishItem key={product.id} product={product} />
            ))
          ) : (
            <div className="flex-center flex-col min-h-[50vh]">
              <h1 className="text-3xl text-gray-800">Your Wishlist is Empty</h1>
              <p className="text-sm text-gray-500">Please add some items...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Wishlist) ;
