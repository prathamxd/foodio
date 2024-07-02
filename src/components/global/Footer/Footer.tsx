import { NAVLINKS } from "@/constants";
import FoodioLogo from "../FoodioLogo";
import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1B1919] py-20 px-36 flex justify-between text-zinc-300">
        <div className="space-y-7">
          <FoodioLogo nameColor="text-white" />
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <Socials />
        </div>

        <div className="space-y-5">
          <p className="text-lg font-medium text-rose-400">Page</p>
          <div className="flex flex-col gap-3">
            {NAVLINKS.map((item, idx) => (
              <Link key={idx} href={item.navLink} className="hover:text-white">
                {item.navName}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-lg font-medium text-rose-400">Information</p>
          <div className="flex flex-col gap-3">
            <Link className="hover:text-white" href="/About">
              About Us
            </Link>
            <Link className="hover:text-white" href="/">
              Testimonial
            </Link>
            <Link className="hover:text-white" href="/">
              Event
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-lg font-medium text-rose-400">Get in touch</p>
          <div className="flex flex-col gap-3">
            <p>221 Baker St, London, NW1 6XE, England</p>
            <p>abc@foodio.com</p>
            <p>+123 4567 8910</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
