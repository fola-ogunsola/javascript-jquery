// function checkUsername() {
// 	var elMsg = document.getElementById('Username');
// 	if (this.value.length< 5) {
// 		elMsg.textContent = 'Username must be 5 characters or more';
// } else {
// 	elMsg.textContent = '';
//   }
// }
// var elUsername = document.getElementById('Username');
// elUsername.onblur = checkUsername;

// Getting property

// var target;
// target = e.target || e.srcElement;

//working with target
// function getEventTarget(e) {
// 	if (!e) {
// 		e = window.event;
// }
// return e.target || e.srcElement;
// };

//using preventDefault	
// if (event.preventDefault) {
// event.preventDefault();
// } else {
// event .returnValue = false;	
// }

//using stopPropagation
// if(event.stopPropagation){
// 	event.stopPropagation();
// } else {
// 	event.cancelBurble = true;
// }


// var sx = document.getElementById('hel'); 
// var sy = document.getElementById('hi'); 
// var px = document.getElementById('hey'); 
// var py = document.getElementById ('hol'); 
// var ex = document.getElementById('item'); 
// var cy = document.getElementById('books');

// function showPosition(event) {
// 	sx.value = event.screenX; 
// 	sy.value = event.screenY; 
// 	px.value = event.pageX; 
// 	py.value = event.pageY; 
// 	cy.value = event.clientY;
// } 
// var el = document.getElementById('body');
// el.addEventListener('mousemove'. showPosition, false);
 

 function setup() {
var textlnput;
textlnput = document.getElementByld('message');
textlnput.focus();

window.addEventlistener('DOMContentloaded', setup, false);
window.addEventlistener('beforeunload', function(event){
return ' You have changes that have not been saved ...' ;
}, false);