'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import styles from './page.module.scss';
import useTicTacToe from './hooks/useTicTacToe';
import WinCelebration from './components/WinCelebration';

const TicTac: React.FC = () => {
  const { winner, isTie, grid, slots, handleReset, play, turn } = useTicTacToe();
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (winner) {
      setShowCelebration(true);
    }
  }, [winner]);

  const handleCloseCelebration = () => {
    setShowCelebration(false);
    handleReset();
  };

  const getSlotClass = (value: string | null) => {
    if (value === 'X') return styles.playerX;
    if (value === 'O') return styles.playerO;
    return '';
  };

  return (
    <Box
      sx={{
        bgcolor: 'defaultBackground.main',
        paddingTop: '4rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'auto',
      }}
    >
      <div className={styles.container}>
        <Box
          id="title"
          component="header"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem 2rem',
          }}
        >
          <Typography variant="h2" className={styles.title}>
            Tic Tac Toe
          </Typography>

          <div className={styles.turnIndicator}>
            <div className={`${styles.playerCard} ${turn === 'X' ? styles.active : ''}`}>
              <span className={styles.playerSymbol}>X</span>
              <span className={styles.playerLabel}>Player X</span>
            </div>
            <div className={styles.vsText}>VS</div>
            <div
              className={`${styles.playerCard} ${styles.playerCardO} ${turn === 'O' ? styles.active : ''}`}
            >
              <span className={styles.playerSymbol}>O</span>
              <span className={styles.playerLabel}>Player O</span>
            </div>
          </div>

          {!winner && !isTie && (
            <div className={styles.currentTurn}>
              <span className={turn === 'X' ? styles.turnX : styles.turnO}>{turn}&apos;s turn</span>
            </div>
          )}

          {isTie && <div className={styles.tieMessage}>It&apos;s a tie! 🤝</div>}
        </Box>

        <div className={styles.board}>
          {grid.flatMap((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.flatMap((_, slotIndex) => {
                const realIndex = rowIndex * 3 + slotIndex;
                const value = slots[realIndex];
                return (
                  <div
                    key={realIndex}
                    className={`${styles.boxes} ${getSlotClass(value)} ${value ? styles.filled : styles.empty}`}
                    onClick={() => play(realIndex)}
                  >
                    <span className={styles.symbol}>{value}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <Button variant="contained" onClick={handleReset} className={styles.reset}>
          Reset Game
        </Button>
      </div>

      {showCelebration && winner && (
        <WinCelebration winner={winner} onClose={handleCloseCelebration} />
      )}
    </Box>
  );
};

export default TicTac;
