
require('./world.js');
require('style-loader!css-loader!./style.css');
function hello( msg ) {
	alert( msg );
}

hello('hello webpack')