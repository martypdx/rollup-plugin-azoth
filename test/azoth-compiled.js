/* eslint indent: off, no-undef: off */
(function (azoth,rxjsEs) {
'use strict';

const __render0 = azoth.renderer(azoth.makeFragment(`<span data-bind>Hello <text-node></text-node></span>`));
const __bind0 = azoth.__textBinder(1);
const name = new rxjsEs.BehaviorSubject('foo');
const template = name => {
	const __nodes = __render0();
	const __sub0 = name.subscribe(__bind0(__nodes[0]));
	const __fragment = __nodes[__nodes.length];
	__fragment.unsubscribe = () => {
		__sub0.unsubscribe();
	};
	return __fragment;
};
const fragment = template(name);
document.body.appendChild(fragment);

}(azoth,rxjs));
