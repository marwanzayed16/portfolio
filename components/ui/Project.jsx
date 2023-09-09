import { SiGithub, SiPostman } from "react-icons/si";
import { BtnPrimary, BtnSecondary } from "./Btns";
import CanvasProject from "./CanvasProject";

const Project = ({ justify, name, desc, github, postman }) => {
  return (
    <div className="project flex items-center justify-center gap-4 flex-wrap">
      {justify == "start" && (
        <CanvasProject
          projectName={name}
          aos={justify == "start" ? "fade-right" : "fade-left"}
        />
      )}
      <div
        className={`data flex-1 ${
          justify == "end" ? "text-end" : "text-start"
        }`}
        data-aos={"fade-right"}
      >
        <h2 className="text-xl mb-5">{name}</h2>
        <p className="mb-5">{desc}</p>
        <div className="flex gap-4 items-center justify-center">
          <BtnSecondary
            href={postman}
            text="API Documentation"
            Icon={SiPostman}
          />
          <BtnPrimary href={github} text="Github Repo" Icon={SiGithub} />
        </div>
      </div>
      {justify == "end" && (
        <CanvasProject projectName={name} aos={"fade-right"} />
      )}
    </div>
  );
};

export default Project;
