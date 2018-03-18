/* eslint indent: off, no-undef: off */
(function (azoth,rxjsEs) {
	'use strict';

	const __renderb3a4924d87 = azoth.__getRenderer('b3a4924d87');
	const name = new rxjsEs.Subject('foo');
	const template = name => {
	  const {__fragment, __nodes} = __renderb3a4924d87();
	  const __child0 = __nodes[0].childNodes[1];
	  const __sub0 = name.subscribe(azoth.__textBinder(__child0));
	  __fragment.unsubscribe = () => {
	    __sub0.unsubscribe();
	  };
	  return __fragment;
	};
	const fragment = template(name);
	document.body.appendChild(fragment);

}(azoth,rxjs));
