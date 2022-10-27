var myImage = document.querySelector('img');


myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/cat.jpeg') {
		myImage.setAttribute('src', 'images/firefox2.jpeg');
	} else {
		myImage.setAttribute('src', 'images/cat.jpeg');
	}
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}


if(!localStorage.getItem('name') || localStorage.getItem('name') === null) {
	setUserName();
} else{
	var sroredName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + sroredName;
}

myButton.onclick = function() {
	setUserName();
}