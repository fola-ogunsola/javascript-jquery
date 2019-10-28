// var saying= 'Home sweet home ';
// var msg = '<h2>length</h2><p>' +saying.length+ '</p>';
// msg += '<h2>uppercase</ h2><p>' + saying .toUpperCase() + '</p>';
// msg += ' <h2>l owercase</ h2><p>' + saying.tolowerCase() + '</p>';
// msg += ' <h2>character index: 12</h2><p>' + saying.charAt(l2) + '</p>';
// msg += '<h2>first ee</h2><p>' + saying.indexOf( ' ee ') + ' </p> ';
// msg += '<h2>laste</h2><p>' + saying.lastlndexOf('e') + '</p>';
// msg += '<h2>character index: 8-14</ h2><p>' + saying.substring(8, 14) + '</p>';
// msg += '<h2>replace</h2><p>' + saying.replace('me','w') + '</p>' ;
// var el = document .getElementById('info' ) ;
// el.innerHTML = msg;

// var randomNum = Math.floor((Math.random() * 10) + 1);
// var el = document.getElementById('info');
// el.innerHTML = '<h2>random number</h2><p>' + randomNum +  '</p>';
// console.log(randomNum);

var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55 ' );
var difference = today.getTime() - est.getTime();
 difference = (difference/ 31556900000);
var elMsg = document.getElementById('info');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
console.log(elMsg);