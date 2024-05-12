import React from "react";
import Projects from "./components/projects";
import Intro from "./components/intro";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Intro />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Landing;
