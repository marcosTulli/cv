"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.scss";
import useTicTacToe from "./hooks/useTicTacToe";

const TicTac: React.FC = () => {
  const { winner, isTie, grid, slots, handleReset, play } = useTicTacToe();

  return (
    <Box
      sx={{
        bgcolor: "defaultBackground.main",
        paddingTop: "4rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <div className={styles.container}>
        <Box
          id="title"
          component="header"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h2" sx={{ color: "secondary.main" }}>
            Tic Tac Toe
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "secondary.main", height: "19px", padding: "2rem" }}
          >
            {winner ? `Winner is ${winner}` : ""}
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "secondary.main", height: "19px", padding: "2rem" }}
          >
            {isTie ? `Tie` : ""}
          </Typography>
        </Box>

        <div className={styles.board}>
          {grid.flatMap((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.flatMap((_, slotIndex) => {
                const realIndex = rowIndex * 3 + slotIndex;
                return (
                  <div
                    key={realIndex}
                    className={styles.boxes}
                    onClick={() => play(realIndex)}
                  >
                    <Typography variant="h2">{slots[realIndex]}</Typography>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <Button
          variant="contained"
          onClick={handleReset}
          className={styles.reset}
        >
          Reset
        </Button>
      </div>
    </Box>
  );
};

export default TicTac;
