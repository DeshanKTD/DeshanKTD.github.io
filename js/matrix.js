document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('matrix');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const glyphs = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|';
  let drops = [];
  let columns = 0;
  let animationId = null;
  let drawToken = 0;

  function resizeCanvas() {
    const density = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * density);
    canvas.height = Math.floor(window.innerHeight * density);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(density, 0, 0, density, 0, 0);

    columns = Math.ceil(window.innerWidth / 22);
    drops = Array.from({ length: columns }, () => Math.random() * window.innerHeight);
  }

  function drawFrame(token) {
    if (token !== drawToken) return;

    ctx.fillStyle = 'rgba(2, 4, 3, 0.12)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.font = '16px SFMono-Regular, Fira Code, JetBrains Mono, monospace';

    drops.forEach((y, x) => {
      const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      const opacity = 0.25 + Math.random() * 0.55;
      ctx.fillStyle = `rgba(50, 255, 126, ${opacity})`;
      ctx.fillText(glyph, x * 22, y);

      if (y > window.innerHeight + Math.random() * 700) {
        drops[x] = 0;
      } else {
        drops[x] = y + 18;
      }
    });

    animationId = window.setTimeout(() => {
      window.requestAnimationFrame(() => drawFrame(token));
    }, 58);
  }

  function drawStaticFrame() {
    ctx.fillStyle = 'rgba(2, 4, 3, 0.72)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.font = '16px SFMono-Regular, Fira Code, JetBrains Mono, monospace';
    ctx.fillStyle = 'rgba(50, 255, 126, 0.22)';

    for (let x = 0; x < columns; x += 1) {
      for (let y = 0; y < window.innerHeight; y += 72) {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        ctx.fillText(glyph, x * 22, y);
      }
    }
  }

  function start() {
    drawToken += 1;
    window.clearTimeout(animationId);
    resizeCanvas();
    if (reducedMotion.matches) {
      drawStaticFrame();
      return;
    }
    drawFrame(drawToken);
  }

  window.addEventListener('resize', start);
  reducedMotion.addEventListener('change', start);
  start();
});
