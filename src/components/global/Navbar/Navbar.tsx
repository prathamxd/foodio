import FoodioLogo from "../FoodioLogo";
import AddToCart from "./AddToCart";
import Login from "./Login";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-36 mt-14">
      <FoodioLogo nameColor="text-black" />
      <NavItems />
      <div className="flex items-center gap-5">
        <AddToCart />
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
