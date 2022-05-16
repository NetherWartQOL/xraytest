window.setInterval(function() {
const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');
ctx.globalAlpha = 0.5;

    const canvas2 = document.getElementById('game_body');
const ctx2 = canvas2.getContext('2d');
ctx2.globalAlpha = 0.5;
  // do stuff
}, 100); // 1000 milliseconds (1 second)
