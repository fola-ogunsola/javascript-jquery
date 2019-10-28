// var price;
// var quantity;
// var total;
// price = 5;
// quantity = 14;
// total = price * quantity;

// var el = document.getElementByid('cost');
// el .textContent = '$' +total;

// var inStock;
// var shipping;
// inStock = true;
// shipping = false;

// var elStock = document.getElementByld('stock');
// console.log(elStock);

// var elShip = document.getElementByid('shipping');
// console.log(elShip);

// var colors;
// colors = ['white', 'black', ' custom '];
// console.log(colors);
// var colors = new Array('white ',
// 						'black',
// 						'custom');
// colors[2] = 'yellow';
// console.log(colors);

// var greeting= 'Howdy';
// var name= 'Molly' ;

// var welcomeMessage = greeting+ name+ '!';
// console.log(welcomeMessage);

// function calculateArea (width, height) {
// 	var area = width * height
// }
// var wallOne = calculateArea(6, 2);
// var wallTwo = calculateArea(5, 4);

// function getSize (width, height, depth) {
// var area = width * height;
// var volume = width * height * depth;
// var sizes= [area , volume];
// return sizes;
// }
// var areaOne = getSize (3, 2, 3)[0];
// var volumeOne = getSize (3, 2, 3)[1];

// var hotel = {
// name: 'Quay',
// rooms : 40,
// booked: 25,
// checkAvailability: function() {
// return this.rooms - this.booked;
// }
// };
//  var elName = console.log(hotelName);
// elName.textContent =hotel .name;
// var elRooms = console.log(rooms);
// elRooms .textContent = hotel .checkAvailability();

// var hotel = {
// name : 'Park',
// rooms : 120,
// booked : 77.
// };
// hotel.gym = true;
// hotel.pool = false;
// delete hotel.booked;
// console.log(hotel);

// var msg = '<h2>browser window</h2><p>width : ' + window. innerWidth + ' </p>' ;
// msg += '<p>height: ' + window.innerHeight + '</p>';
// console.log(msg);
// msg += '<h2>history</h2><p>items :' + window.history. length + 1 </p>'; 
// msg += '<h2>screen</h2><p>width : ' +window.screen .width+ 1 </p>' ;
// msg += '<p>height : ' + window . screen .height+ '</p>';
// var el = document.getElementByld('info');
// el.innerHTML = msg;
//  alert('Current page : ' +window.location);

// var msg = '<p><b>page title: </b>' + document.title + '<br/> ' ;
// msg += '<b>page address: </b>' +document.URL+ '<br/>';
// msg += ' <b>last modifi ed : </b>' + document.lastModified + ' </p>' ;
// var el = document.getElementByld('footer');
// el.innerHTML = msg;

// var randomNum = Math.sqrt((Math.random() * 10) + 1);
// alert(randomNum);


// var pass = 50; 
// var score = 90;
// var hasPassed = score >= pass;
// console.log(hasPassed);


// var score = 75;
// var msg = ' ';

// function congratulate() { 
//   msg += ' Congratulations! ' ;
// }

// if (score>= 50) {
//     congratulate();
//   msg += 'Proceed to the next round .';

// };
// alert(msg);

var pass = 50;
var score = 33;
var msg = '';
if(score >= pass){
	msg = 'Congratulations! ';
} else {
	msg = 'try again later'
};
alert(msg);


