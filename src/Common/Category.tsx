import { TCategoryProps } from "../Types/Types";

const Category = ({ cat }: TCategoryProps) => {
  return (
    <div className="text-center cursor-pointer bg-blue-700  hover:bg-blue-600 transition-all duration-300 text-white rounded-lg p-2 flex-center flex-col w-30">
      <div className="w-25 text-center h-20 flex-center">
        <img src={cat.image} alt={cat.name} className="mx-auto"></img>
      </div>
      <h2>{cat.name}</h2>
    </div>
  );
};

export default Category;
