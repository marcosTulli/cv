'use client';
import React, { useEffect, useState } from 'react';
import styles from './WinCelebration.module.scss';

interface WinCelebrationProps {
  winner: string;
  onClose: () => void;
}

const CELEBRATION_EMOJIS = ['🎉', '🏆', '⭐', '🎊', '✨', '🥳', '💥', '🔥', '👑', '💫'];

interface FlyingEmoji {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  isWinnerSymbol: boolean;
}

const WinCelebration: React.FC<WinCelebrationProps> = ({ winner, onClose }) => {
  const [emojis, setEmojis] = useState<FlyingEmoji[]>([]);

  useEffect(() => {
    const generatedEmojis: FlyingEmoji[] = Array.from({ length: 60 }, (_, i) => {
      const isWinnerSymbol = i % 3 === 0;
      return {
        id: i,
        emoji: isWinnerSymbol
          ? winner
          : CELEBRATION_EMOJIS[Math.floor(Math.random() * CELEBRATION_EMOJIS.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        isWinnerSymbol,
      };
    });
    setEmojis(generatedEmojis);
  }, [winner]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.trophy}>🏆</div>
        <h1 className={styles.title}>
          Player <span className={winner === 'X' ? styles.playerX : styles.playerO}>{winner}</span>{' '}
          Wins!
        </h1>
        <p className={styles.subtitle}>Congratulations!</p>
        <button className={styles.playAgain} onClick={onClose}>
          Play Again
        </button>
      </div>
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className={`${styles.flyingEmoji} ${emoji.isWinnerSymbol ? (winner === 'X' ? styles.winnerX : styles.winnerO) : ''}`}
          style={{
            left: `${emoji.left}%`,
            animationDelay: `${emoji.delay}s`,
            animationDuration: `${emoji.duration}s`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};

export default WinCelebration;
