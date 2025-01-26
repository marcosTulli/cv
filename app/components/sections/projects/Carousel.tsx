"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Carousel = () => {
  const settings = {
    infinite: true,
    className: "center",
    swipeToSlide: true,
    draggable: true,
    arrows: true,
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

  const cards = [
    { id: 1, title: "Card 1", content: "This is the content of Card 1" },
    { id: 2, title: "Card 2", content: "This is the content of Card 2" },
  ];

  return (
    <Box
      sx={{ maxWidth: "90%", margin: "auto", height: "100%" }}
      className="slider-container"
    >
      <Slider {...settings}>
        {cards.map((card) => (
          <Card
            key={card.id}
            sx={{
              bgcolor: "primary.main",
              color: "secondary.main",
              borderRadius: "1rem",
              boxShadow: "4px 4px 5px 4px rgba(0, 0, 0, 0.5)", // Stronger shadow
              margin: "0 1rem",
              height: "200px",
              maxWidth: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
            }}
            className="carousel-card"
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {card.title}
              </Typography>
              <Typography>{card.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
