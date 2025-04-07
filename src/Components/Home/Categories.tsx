// import axios from "axios";
import Category from "../../Common/Category";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TCategory } from "../../Types/Types";

const Categories = () => {
  const [cats, setCats] = useState<TCategory[]>([]);

  const getCats = useCallback(async () => {
    try {
      const res = await fetch("/public/assets/Category/categories.json");
      const data = await res.json();
      setCats(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    // setTimeout(() => {
    // }, 4000);
      getCats();
  }, [getCats]);
  const memoizedCats = useMemo(() => cats, [cats]);
  return (
    <section className="py-4 contain">
      <h2 className="text-center text-4xl font-bold text-blue-900">
        Categories
      </h2>
      <p className="text-center mb-5 italic text-orange-700">Find your style</p>
      <div className="flex-center flex-wrap gap-3">
        {memoizedCats.length > 0 ? (
          memoizedCats.map((cat: TCategory) => (
            <Category cat={cat} key={cat.name} />
          ))
        ) : (
          <h2>Loading Categories</h2>
        )}
      </div>
    </section>
  );
};

export default Categories;
