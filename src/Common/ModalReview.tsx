import { hide } from "../Store/ReviewSlice";
import { useAppDispatch, useAppSelector } from "../Store/Store";
import { Tproduct } from "../Types/Types";
import AddCartBtn from "./AddCartBtn";

const ModalReview = () => {
  const dispatcher = useAppDispatch();
  const showState = useAppSelector((state) => state.ReviewState.case);
  const product: Tproduct | undefined = useAppSelector(
    (state) => state.ReviewState.preview
  );
  return (
    <>
      {showState === "Shown" ? (
        <>
          <div
            className="fixed h-full w-full top-0 left-0 z-40 overlay "
            onClick={() => dispatcher(hide())}
          ></div>
          <div className="fixed m-10 sm:m-0 contain translate-center z-50 bg-white rounded-sm flex-center flex-col sm:flex-row">
            <div className="overflow-hidden flex-center">
              <img
                className="max-w-250 max-h-70 sm:w-250 sm:h-70 object-cover"
                src={product?.images[0]}
                alt={product!.name}
              />
            </div>
            <div className="details p-4">
              <h2 className="text-2xl mb-3">
                Product Name:{" "}
                <span className="text-blue-600 font-bold">{product?.name}</span>
              </h2>
              <p className="mb-3 text-xl">
                Category:{" "}
                <span className="text-gray-800">{product?.category}</span>
              </p>
              <p className="mb-3">
                Description:{" "}
                <span className="text-gray-600">{product?.description}</span>
              </p>
              <div className="flex-center">
                <p className="w-full">
                  Price: ${" "}
                  <span className="text-2xl text-blue-950">
                    {product?.price}
                  </span>
                </p>
                {product && <AddCartBtn product={product} />}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalReview;
