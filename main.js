const modeBtn = document.querySelector ("#mode-btn-");

/*
modeBtn.addEventListener("click", e => {
  document.body.classList.toggle("light")
  modeBtn.innerText = document.body.classList.contains
  ("light") ? "Dark Mode: Off" : "Dark Mode: On"
});
*/

document.querySelector('#mode-btn-').onchange = (e) => {
  const checked = e.target.checked;
  document.body.classList.toggle("light")
};
