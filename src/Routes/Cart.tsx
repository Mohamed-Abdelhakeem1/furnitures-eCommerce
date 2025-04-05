import CartTable from "../Components/Cart/CartTable";
const Cart = () => {

  return (
    <section className="cart-section">
      <div className="contain mb-8">
        <h2 className="mx-auto font-bold w-fit text-3xl py-5 text-blue-900">
          Shopping Cart
        </h2>
        <CartTable />
      </div>
    </section>
  );
};

export default Cart;
