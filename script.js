var numberClicks = Math.ceil(1*Math.random());
var outputNumber = document.getElementById('aantal');
var totalScore = numberClicks*Math.random()*5;
var outputRating = document.getElementById('waardering');
var theStars = document.querySelectorAll('.geen');

function colorStar(starNumber, procent) {
	var naam = 's' + starNumber;
	procent = Math.min(procent, 100);
	document.getElementById(naam).style.width = procent+'%';
}
//colorStar(3,50);

function colorTheStars(rating) {
	for(var i=1; i<6; i++) {
		colorStar(i, rating*100);
		rating --;
		
	}
}

//colorTheStars(3.5)

// random genereren en uitvoeren in DOC
function ouput() {
	outputNumber.innerHTML = numberClicks;
	outputRating.innerHTML = Math.ceil(10*totalScore/numberClicks)/10;
	colorTheStars(Math.ceil(10*totalScore/numberClicks)/10);
}

ouput();

function processClick() {
	numberClicks ++ ;
	var number = this.getAttribute('data-role');
	totalScore += parseInt(number); // inhoud omzetten naa heel getalZ
	ouput();
}
for(var i=0; i<theStars.length; i++) {
	theStars[i].addEventListener('click', processClick);
}
