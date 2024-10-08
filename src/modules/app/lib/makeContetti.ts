import confetti from 'canvas-confetti';

function makeConfetti() {
  confetti({
    particleCount: 30,
    angle: 60,
    gravity: 0.1,
    spread: 55,
    disableForReducedMotion: true,
    origin: { y: 1.2, x: 0 },
  });
  confetti({
    particleCount: 30,
    angle: 120,
    gravity: 0.1,
    spread: 55,
    disableForReducedMotion: true,
    origin: { y: 1.2, x: 1 },
  });
}

export { makeConfetti };