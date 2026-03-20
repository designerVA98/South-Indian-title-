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
/* SECOND TITLE TEXT */
const text2 = "DAYLIGHT";
const subtitleText = "Story by Valaboju Akhil";

const title2 = document.getElementById("title2");
const subtitle2 = document.getElementById("subtitle2");

/* Scroll trigger */
window.addEventListener("scroll", () => {
  const section = document.querySelector(".section2");
  const position = section.getBoundingClientRect().top;

  if (position < window.innerHeight - 100) {
    section.classList.add("active");

    /* Title animation */
    if (title2.innerHTML === "") {
      text2.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("letter2");
        span.style.animationDelay = `${i * 0.1}s`;
        title2.appendChild(span);
      });

      /* Subtitle delay */
      setTimeout(() => {
        subtitle2.innerText = subtitleText;
      }, 1200);
    }
  }
});