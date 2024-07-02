import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex gap-10 w-full my-20 px-36">
      {/* Left Hero */}
      <div className="flex flex-col justify-center space-y-10">
        <p className="text-7xl font-bold w-[80%]">
          Best Restaurant In <span className="text-rose-500">Town.</span>
        </p>
        <p className="w-[60%] text-gray-600">
          We provide best foods in town, we provide home delivery and dine in
          service.
        </p>
        <div className="space-x-5">
          <button className="w-36 text-sm text-white font-semibold h-12 rounded-lg bg-rose-500">
            Order Now
          </button>
          <button className="w-36 text-sm text-rose-500 font-semibold h-12 rounded-lg bg-rose-100">
            Reservation
          </button>
        </div>
      </div>

      <div>
        <Image
          alt="spaghetti image"
          src="/images/spaghetti.png"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
