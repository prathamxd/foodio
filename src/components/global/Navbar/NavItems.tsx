import Link from "next/link";
import { NAVLINKS } from "@/constants";

const NavItems = () => {
  return (
    <div className="flex gap-10">
      {NAVLINKS.map((item, idx) => (
        <Link
          key={idx}
          href={item.navLink}
          className="hover:underline underline-offset-[6px] text-gray-600 font-medium hover:text-rose-500"
        >
          {item.navName}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
