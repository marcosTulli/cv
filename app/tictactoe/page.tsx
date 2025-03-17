"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.scss";
import Page from "@/components/page";

enum Players {
  X = "X",
  O = "O",
}

type Slot = Players.X | Players.O | null;

type Line = {
  first: Slot;
  second: Slot;
  third: Slot;
};

type Row = Slot[];

const winerLines: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const grid: Row[] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTac: React.FC = () => {
  const rows = grid.flatMap((row) => row);
  const [lockBoard, setLockBoard] = React.useState(false);
  const [winner, setWinner] = React.useState<Slot>(null);
  const [turn, setTurn] = React.useState(Players.X);
  const [slots, setSlots] = React.useState(rows);
  const [isTie, setIsTie] = React.useState(false);

  const changeTurn = () => {
    setTurn((p) => (p === Players.X ? Players.O : Players.X));
  };

  const handleReset = () => {
    setSlots(rows);
    setWinner(null);
    setLockBoard(false);
    setIsTie(false);
  };

  const checkSlot = ({ slot, player }: { slot: number; player: Slot }) => {
    setSlots((prev) => prev.map((num, i) => (i === slot ? player : num)));
  };

  const validateLine = (line: Line) => {
    const { first, second, third } = line;
    return first === second && second === third && third !== null;
  };

  const won = (player: Slot) => {
    setLockBoard(true);
    setWinner(player);
  };

  const checkWin = (slots: Slot[]) => {
    for (const [a, b, c] of winerLines) {
      const line: Line = { first: slots[a], second: slots[b], third: slots[c] };
      if (validateLine(line)) {
        won(slots[c]);
        return;
      }
    }
  };

  const play = (num: number) => {
    if (lockBoard) {
      return 0;
    }

    if (!slots[num]) {
      if (turn === Players.X) {
        checkSlot({ slot: num, player: Players.X });
      } else if (turn === Players.O) {
        checkSlot({ slot: num, player: Players.O });
      }
    }
    changeTurn();
  };

  React.useEffect(() => {
    checkWin(slots);
    if (!winner && !slots.includes(null)) {
      setIsTie(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slots, winner]);

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
