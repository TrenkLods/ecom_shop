import confetti from "canvas-confetti";

export const runConfetti=()=>{var end = Date.now() + (15 * 100);

    // go Buckeyes!
    var colors = ['#4B4A4A', '#D6D4D4'];
    
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());}