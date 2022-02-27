var inc = 1000;
myclock();
function myclock() {
	const mydate = new Date();
	const hours = ((mydate.getHours() + 11) % 12) + 1;
	const minutes = mydate.getMinutes();
	const seconds = mydate.getSeconds();
	const hdegree = hours * 30;
	const mdegree = minutes * 6;
	const sdegree = seconds * 6;
	document.querySelector(".hour").style.transform = `rotate(${hdegree}deg)`;
	document.querySelector(".minute").style.transform = `rotate(${mdegree}deg)`;
	document.querySelector(".second").style.transform = `rotate(${sdegree}deg)`;
}
setInterval(myclock, inc);
