const facts = [
  "I love exploring nature and camping in the wilderness!🌲",
  "My favorite sport is padel."
  "I enjoy coding small games."
  "I like to spend time with my family on weekends."
  "I love penguins, its my favorite animal."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});
