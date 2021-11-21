const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");


const birthDay ="13 nov 2022";
function countdown(){
	const birthDayDate = new Date(birthDay);
	const currentDate  = new Date();
	const totalseconds = (birthDayDate - currentDate)/1000;

	const days = Math.floor(totalseconds/3600/24);
	const hours = Math.floor(totalseconds/3600)%24;
	const min = (Math.floor(totalseconds/60)%60);
	const seconds = Math.floor(totalseconds)%60;
	
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minEl.innerHTML= min;
	secondsEl.innerHTML = seconds;

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);

