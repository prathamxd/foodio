import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Socials = () => {
  const socials = [
    <FaXTwitter size={20} />,
    <FaInstagram size={20} />,
    <FaFacebookF size={20} />,
  ];
  return (
    <div className="flex gap-5">
      {socials.map((link, idx) => (
        <div
          className="w-10 h-10 bg-zinc-100 text-black flex justify-center items-center rounded-full"
          key={idx}
        >
          {link}
        </div>
      ))}
    </div>
  );
};

export default Socials;
