import { MdOutlineShoppingCart } from "react-icons/md";

const AddToCart = () => {
  return (
    <div className="font-medium w-10 h-10 rounded-full flex justify-center items-center border-[1px] border-gray-300">
      <MdOutlineShoppingCart size={18} />
    </div>
  );
};

export default AddToCart;
