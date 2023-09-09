import Aos from "aos";
import { useEffect } from "react";

const Card = ({ title, Icon }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-right" className="w-full p-[1px] rounded-[20px]">
      <div className="bg-background-white dark:bg-background-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Icon className="w-16 h-16 object-contain" />
        <h3 className="text-[20px] font-bold text-center">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
