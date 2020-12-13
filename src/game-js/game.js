const refs = {
  container: document.querySelector(".game__link"),
  btnStart: document.querySelector(".game-btn__start"),
  btnStop: document.querySelector(".game-btn__stop"),
};

refs.container.textContent;

const coords = refs.container.getBoundingClientRect();

let id = null;
const clear = () => clearInterval(id);
const timerPopUp = () => {
  id = setInterval(() => {
    randomPopUp();
  }, 4000);
};
const randomPopUp = () => {
  const pageY = Math.floor(Math.random() * (450 - 1) + 1); // top
  const pageX = Math.floor(Math.random() * (750 - 1) + 1); // left
  refs.container.style.left = pageX + "px";
  refs.container.style.top = pageY + "px";
};
const nextPopUp = () => {
  const pageY = Math.floor(Math.random() * (450 - 1) + 1); // top
  const pageX = Math.floor(Math.random() * (750 - 1) + 1); // left
  refs.container.style.left = pageX + "px";
  refs.container.style.top = pageY + "px";
};
refs.btnStart.addEventListener("click", (e) => {
  if (e.currentTarget.nodeName !== "BUTTON") {
    return;
  }
  timerPopUp();

  refs.btnStop.addEventListener("click", (e) => {
    if (e.currentTarget.nodeName !== "BUTTON") {
      return;
    }
    clear();
  });

  refs.container.addEventListener("click", (e) => {
    e.preventDefault();

    // Проверка на нажатие по объекту

    if (e.currentTarget.nodeName === "A") {
      if (id !== null) {
        clearTimeout(id);
      }
      nextPopUp();
      timerPopUp();
    }
  });
});
