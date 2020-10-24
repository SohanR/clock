const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

window.addEventListener('DOMContentLoaded', ()=> {
	/* call the function without interval to avoid initial pause of clock hands */
	setDate();
	/* set interval after running the function first time */
	setInterval(setDate, 1000);
})

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();

  const secDegree = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = (min / 60) * 360 + (sec / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = now.getMinutes();
  const hourDegree = (hour / 12) * 360 + (min / 60) * 30 + 90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
