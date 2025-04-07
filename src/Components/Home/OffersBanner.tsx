import secondImg from "/assets/Hero_banner/01.jpg";
import firstImg from "/public/assets/Hero_banner/04.jpg";

const OffersBanner = () => {
  return (
    <section className="py-6 ">
      <div className="contain flex-center flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8">
        <div className="relative w-full sm:flex-1">
          <div className="w-full">
            <img className="w-full" src={firstImg}></img>
          </div>
          <div className="absolute bottom-0 p-3">
            <h2 className="text-xl font-semibold">Limited Time Offers:</h2>
            <h3 className="text-3xl font-bold">
              Get Cozy with Discounted Sofas!
            </h3>
          </div>
        </div>
        <div className="relative w-full sm:flex-1 mt-2 sm:mt-0">
          <div className="w-full">
            <img className="w-full" src={secondImg}></img>
          </div>
          <div className="absolute top-0 p-3">
            <h2 className="text-xl font-semibold">Exclusive Deals:</h2>
            <h3 className="text-3xl font-bold">Save on Big Stylish Chairs!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
