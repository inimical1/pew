const form = document.getElementById('questionForm');
const input = document.getElementById('questionInput');
const answerBox = document.getElementById('answerBox');

const answers = [
  "Honestly? You were never wrong to begin with 🌟.",
  "Maybe… but only if you give me a cookie first 🍪.",
  "The universe is confused. Ask again after a dance break 💃.",
  "No matter what you ask, you’re still the main character🥰.",
  "Every version of this ends with you winning😉"
];

form.addEventListener('submit', e => {
  e.preventDefault();
  const q = input.value.trim();
  if (!q) return;
  const answer = answers[Math.floor(Math.random() * answers.length)];
  answerBox.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < answer.length) {
      answerBox.textContent += answer.charAt(i);
      i++;
      setTimeout(typeWriter, 24);
    }
  }
  typeWriter();
  input.value = '';
});
