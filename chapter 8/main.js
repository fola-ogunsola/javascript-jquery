// //using jsonp
// showEvents({
// "events" : [
// {
// 	"location": "San Francisco, CA",
//     "date": "May 1",
//     "map": "img/map-ca.png"
//  },
//  {
//  	"location": "Austin, TX",
//     "date": "May 15",
//      "map": "img/map-tx.png"
//   },
//   {
//   	"location" : "New York, NY",
//     "date": "May 30",
//     "map": "img/map-ny . png"
//   }
//   ]
// });

$('nav a').on ('click', function(e) {
   e.preventDefault();
   var ur1 = this.href;

   $('nav a.current').removeClass('current');
   $(this).addClass('current');
   $('#container').remove();
   $('#content'). load(url + '#content').hide().fadein('slow');
});