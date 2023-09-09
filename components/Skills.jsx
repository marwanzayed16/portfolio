import React, { useEffect } from "react";
import Aos from "aos";
import Title from "./ui/Title";
import Card from "./ui/Card";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiPostman, SiMongodb, SiTypescript } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="skills snap-start overflow-x-hidden" id="skills">
      <div className="container relative min-h-screen pt-[100px]">
        <Title title="Skills" />
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card title="HTML" Icon={TiHtml5} />
          <Card title="JavaScript" Icon={IoLogoJavascript} />
          <Card title="Nodejs" Icon={IoLogoNodejs} />
          <Card title="Express" Icon={SiExpress} />
          <Card title="Postman" Icon={SiPostman} />
          <Card title="MongoDB" Icon={SiMongodb} />
          <Card title="TypeScript" Icon={SiTypescript} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
