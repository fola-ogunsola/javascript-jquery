// $(function() {
//  var people = [
// {
// name: 'Casey ',
// rate: 60
// },
// {
// name: 'Camille',
// rate: 80
// ),
// {
// name: ' Gordon',
// rate : 75
// } .
// {
// name : 'Nigel',
// rate: 120
// }
// ];
// var results= [];
// people.forEach(function(person) {
// 	if (person.rate>= 65 && person.rate<= 90) {
// 		results.push(person);
// }
// });

// var prices = [1, 2, 125, 2, 19, 14];
// prices.sort(function(a, b) {
// return a - b;
// });
// console.log(prices);

// var prices = [l, 2, 125, 2, 19, 14];
// prices.sort(function(a, b) { ·
// return b - a;
// });
// console.log(prices);

//sorting date
var holidays = [
 '2014-12 -25', 
 '2014-04-01',
 '2014-07-04',
 '2014-11-28'
];
holidays.sort(function(a, b) {
var dateA = new Date(a);
var dateB = new Date(b);
return dateA - dateB
});
console.log(holidays);


