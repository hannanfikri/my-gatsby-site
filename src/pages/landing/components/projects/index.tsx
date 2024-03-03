import { Card, CardHeader } from "@material-tailwind/react";
import React from "react";

const Projects = () => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader>
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
    </Card>
  );
};

export default Projects;
