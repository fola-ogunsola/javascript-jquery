var table = 3;
var operator= 'addition';
var i = 1;
var msg = ' ';
if (operator === 'addition') {
	while (i < 11) {
		msg += i + ' + ' + table + ' = ' + (i +table)+ '<br>';
		i++;
}else {
while (i < 11) {
	msg += i + ' x ' + table + ' = ' + (i *table) + '<br> ';
	i++;
}
};
console.log(msg);

//while loop
// var i = 1;
// var msg = ' ' ;
// while (i < 10) {
// msg += i + ' x 5 = ' + (i * 5) + '<br>';
// i++;
// };
// console.log(msg);


// var scores= [24, 32, 17]; 
// var arraylength = scores.length;
// var roundNumber = 0; 
// var msg = ''; 
// var i ;
// for (i = 0; i < arraylength; i++) {
// 	roundNumber = (i + 1);
// 	msg += 'Round ' + roundNumber + ' : ';
// msg += scores[i] + '<br/>' ;
// }
// console.log(msg);