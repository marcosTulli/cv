'use client';
import React from 'react';

enum Players {
  X = 'X',
  O = 'O',
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

const useTicTacToe = () => {
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
    if (turn === Players.O) {
      changeTurn();
    }
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
    if (!winner && !slots.includes(null)) {
      setIsTie(true);
    }
  };

  const checkSlot = ({ slot, player }: { slot: number; player: Slot }) => {
    setSlots((prev) => prev.map((num, i) => (i === slot ? player : num)));
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
      changeTurn();
    }
  };

  React.useEffect(() => {
    checkWin(slots);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slots]);

  return { slots, winner, isTie, grid, play, handleReset };
};

export default useTicTacToe;
