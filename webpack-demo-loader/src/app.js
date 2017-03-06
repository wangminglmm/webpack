import Layer from './components/layer/layer.js';
import './css/common.css';
const App = function (){
	
	var div = document.getElementById( 'app' );
	var layer = new Layer();
	div.innerHTML = layer.tpl({
		hello:'我是传入的hello',
		arr: [1,2,3,4,5]
	});
}
new App();
