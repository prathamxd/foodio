import Image from "next/image";
import { Button } from "../ui/button";

const PopularDish = () => {
  return (
    <div className="flex gap-10 px-36 bg-[#E8F8EE] my-36 py-14 items-center">
      <div className="w-[50%]">
        <Image
          alt="Popular dish"
          src="/images/salad.png"
          height={500}
          width={500}
        />
      </div>
      <div className="w-[50%] space-y-10">
        <h1 className="text-6xl font-bold w-[70%]">
          Our Most Popular <span className="text-rose-500">Dish.</span>
        </h1>
        <p className="w-[70%] font-medium text-gray-500 leading-8 text-xl">
          This dish is full of flavor and nutrition! Quinoa is a complete
          protein, providing all the essential amino acids your body needs, and
          is also a good source of fiber.
        </p>
        <Button className="bg-rose-500 text-white text-sm px-7 font-semibold hover:bg-rose-50 hover:text-rose-500 hover:border-[1px] border-rose-500">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default PopularDish;
