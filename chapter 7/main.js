// $(':header').addClass('headline');
// $('button').hide(). fadeIn(1500);
// $('#three').on('click', function() {
//   $(this).remove();
// });

// chaining
// $('li[id!="two"]')
// .hide()
// .delay(500)
// .fadeIn(1400);

// $('li[id="two"]')
// .hide()
// .delay()
// .fadeIn();
//append

// var $y = $('ul').text();
// $('ul').append('<span></span>');

var $1istItemHTML = $ ('1i').html() ;
$('1i').append('<i>'+ $1istItemHTML + '</i>');

$(function() {
$ ('li :contains ("pine")'). text('almonds');
$ ('li.hot').html (function() {
return 1<em> ' + $(thi s).text() + 1</ em>' ;
}) ;
 $('li#one').remove();
});


$newitemForm.on('submit', function(e){
	e.preventDefault();
    var text= $('input:text').val() ;
    $list.append('<li> ' +text+ '</li>');
    $('input:text').val ('');
    updateCount ();
});
$list.on(' cl i ck', 'li ', function(){
	var $this= $(this); 
     var complete= $this.hasClass('complete');
     if (complete === true){
	  var $this= $(this);
       var complete= $this.hasCl ass('complete');

    if (comp lete === true) {
       $this.animate({
       opacity: 0.0,
       paddingLeft: '+=180'
     }, 500, 'swing', function() {
     $this. remove();
     });
   } else {
   	item= $this.text();
    $this.remove();
    $list 
    .append('<li class=\"complete\">' +item+ '<ll i>')
    .hide().fadein(300);
    updateCount();
} 
 });
});


