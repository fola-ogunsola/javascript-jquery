//using querySelectorAll

// var x = document.querySelectorAll('li.hot');
// if (x.length > 0) {
// 	if (var i =0; x.length > 0; i++) {
// 		x[i].className = 'cool';
// 	}
// };

//Using previosSibling and nextSibling

// var y = document.getElementById('para_two');
// var prevltem = y.previousSibling;
// var nextltem = y.nextSibling;
// prevltem.className = 'complete';
// nextltem.className = 'cool';


//replacing nodevalue
// var x = document.getElementById("para_two");
// var el = x.firstChild.nodeValue;
// el = el.replace("pine nuts", "kale");
// x.firstChild.nodeValue = el;

// var elContent = document.getElementById('para').innerHTML;
// console.log(elContent);

  //creating element into dom tree

// var newEl = document.createElement('p');
// var newText = document.createTextNode('quinoa');
// newEl.appendChild(newText);
// var position = document.getElementsByTagName('ul')[0];
// position .appendChild(newEl);

// var x = document.createElement("p");
// var newElement = document.createTextNode("This is a new paragrahp");
// x.appendChild(newElement);
// var position = document.getElementsByTagName("ul")[0];
// position .appendChild(x);


//removing Element using parentNode

// var x = document.getElementsByTagName("li")[2];
// var parentElement = x.parentNode;
// parentElement.removeChild(x);

//attribute has and get

// var x = document.getElementById("para");
// if (x.hasAttribute("class"));
	// var attr = x.getAttribute("class");


//setAttribute
// var firstItem = document.getElementById('para');
// firstItem.className = 'complete ';
// var fourthltem = document.getElementsByTagName('li').item(3);
// firstItem.setAttribute('class', 'cool');

//removeAttribute
var x = document.getElementById("para");
if(x.hasAttribute("class")){
	var attr = x.removeAttribue("class");
};
