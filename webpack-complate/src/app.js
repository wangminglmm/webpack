import './css/common.css';
import Layer from './components/layer/layer.js';
const layer = function(){
	var div = document.getElementById( 'layer_box' );
	div.innerHTML = new Layer().tpl({
		title: '我是ejs模板'
	});
}
layer();