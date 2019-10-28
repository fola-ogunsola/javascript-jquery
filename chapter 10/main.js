var $form = $('#calculator');
$form.on('submit', function(e) {
	e.preventDefault();
	console.log('Clieked submit. . . ');
	var width, height, area;
	width= $('#width') .val();
	height= $(' #height') .val();
	area = width * height;

console.group( ' Area calculations');
	console.info('Width ' , width);
	console.info( 'Height ', height);
	console.log(area);
	console.groupEnd();
	$form.append( ' <p>' +area+ '<I p> ' );
});



console.log('And we\'re off ... ');
var $form, width, height, area ;
$form = $('#calculator');
$('form i nput[type="text"]').on( ' blur ' , function() {
	console . log('You entered ', this.value);
});
$(' #calculator').on('submit', function(e) {
	e.preventDefault();
	console.log('Clicked submit . . . ') ;
	width = $('#width').val();
	console.log('Width ' +width};
	height= $('#height').val();
	console.log( 'Height ', height);
	area = width * height;
	console. log(area);
	$form.append('<p> ' +area+ ' </p>');