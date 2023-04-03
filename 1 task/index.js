const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let time = seconds
    const timerIntserval = setInterval(() => {
      const seconds = time % 60
      const mins = time / 60 % 60
      const hours = time / 60 / 60 % 60

      if(time === 0) {
        clearInterval(timerIntserval)
        alert('Время вышло!')
      }
      else {
        const stringHours = hours >= 10 ? Math.trunc(hours) : `0${Math.trunc(hours)}`
        const stringMins = mins >= 10 ? Math.trunc(mins) : `0${Math.trunc(mins)}`
        const stringSecs = seconds >= 10 ? Math.trunc(seconds) : `0${Math.trunc(seconds)}`
        const timeString = `${stringHours}:${stringMins}:${stringSecs}`;
        timerEl.innerHTML = timeString;
      }
      --time;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const value = e.target.value
  inputEl.value = value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
