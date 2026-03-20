const text = "VA98 CREATIVITY";
const title = document.getElementById("title");

/* Letter-by-letter animation */
text.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.classList.add("letter");

  span.style.animationDelay = `${i * 0.1}s`;
  title.appendChild(span);
});