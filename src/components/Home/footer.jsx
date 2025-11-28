import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const LinksData = [
  {
    to: "http://t.me/theprolifichurch",
    icon: <FaTelegramPlane size={25} />,
  },
  {
    to: "https://whatsapp.com/channel/0029Vb9C7kxJ3jv1vFU4vy1L",
    icon: <FaWhatsapp size={25} />,
  },
];

const RenderLinks = ({ to, icon }) => {
  return (
    <a
      class="text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors"
      href={`${to}`}
    >
      {icon}
    </a>
  );
};

const Footer = () => {
  return (
    <footer class="bg-background-light  border-t border-slate-200 ">
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div class="flex flex-col gap-1">
            <p class="text-slate-800 text-lg  font-bold">The Prolific Church</p>
            <p class="text-slate-500 text-sm">
              Venue: Sion Conference Hall The Hills Plaza, Nana Krom Road, East
              Legon Hills. Landmark: KFC East Legon Hills Complex
            </p>
          </div>

          <div class="flex gap-4">
            {LinksData.map(({ to, icon }, index) => (
              <RenderLinks key={index} to={to} icon={icon} />
            ))}
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            © 2024 The Prolific Church. All rights reserved. |{" "}
            <a class="hover:underline" href="#">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
