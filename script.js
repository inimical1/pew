const form = document.getElementById('questionForm');
const input = document.getElementById('questionInput');
const answerBox = document.getElementById('answerBox');

const answers = [
  "Without a doubt, yes — the stars have confirmed it 🌟.",
  "Maybe… but only if you give me a cookie first 🍪.",
  "The universe is confused. Ask again after a dance break 💃.",
  "100% yes. And also, you're adorable for asking that 🥰.",
  "i think it will be hmmm… but hey you already know the answer, don't you? 😉"
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