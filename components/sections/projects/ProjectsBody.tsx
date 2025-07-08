"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import ProjectCard from "./project-card";
import { IProject } from "@/models/interfaces";

enum Paths {
  PasswordGenerator = "password-generator",
  NodeTree = "node-tree",
  TicTacToe = "tictactoe",
  BandsDb = "https://bands-db.vercel.app/bands",
  CVAPI = "https://cv-service-cf36.onrender.com/api",
}

const ProjectsBody = () => {
  const settings = {
    infinite: true,
    className: "center",
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    speed: 200,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects: IProject[] = [
    {
      id: 1,
      title: "Password Generator",
      content: "Password generator",
      path: Paths.PasswordGenerator,
      target: "_self",
    },
    {
      id: 2,
      title: "Node Tree",
      content: "Node tree",
      path: Paths.NodeTree,
      target: "_self",
    },
    {
      id: 3,
      title: "Bands DB",
      content: "Bands DB",
      path: Paths.BandsDb,
      target: "_blank",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      content: "Tic Tac Toe",
      path: Paths.TicTacToe,
      target: "_self",
    },
    {
      id: 5,
      title: "CV API",
      content: "CV API",
      path: Paths.CVAPI,
      target: "_blank",
    },
  ];

  return (
    <Box
      sx={{ maxWidth: "90%", margin: "auto", height: "100%" }}
      className="slider-container"
    >
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectsBody;
