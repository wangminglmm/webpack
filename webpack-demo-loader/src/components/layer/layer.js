import tpl from './layer.tpl';
//如果是ejs模板 tpl就是一个函数，如果是html就是html字符串
import './layer.less';
import './out.scss';
function layer(){
	return {
		name: 'layer',
		tpl: tpl
	}
}

export default layer;