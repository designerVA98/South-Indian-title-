const title = document.getElementById("title");

/* Glow pulse effect */
setInterval(() => {
  title.style.textShadow = `
    0 0 10px rgba(255,140,0,0.8),
    0 0 30px rgba(255,100,0,0.6),
    0 0 60px rgba(255,60,0,0.4)
  `;
}, 500);
