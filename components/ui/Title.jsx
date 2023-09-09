import Aos from "aos";
import { useEffect } from "react";

const Title = ({ title }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative w-full" data-aos="fade-right">
      <h2 className="title">{title}</h2>
      <span className="title-before"></span>
    </div>
  );
};

export default Title;
