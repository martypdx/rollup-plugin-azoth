/* eslint indent: off, no-undef: off */
(function (azoth,rxjsEs) {
'use strict';

const __render0 = azoth.__makeRenderer(`<span data-bind>Hello <text-node></text-node></span>`);
const name = new rxjsEs.Subject('foo');
const template = name => {
  const {__fragment, __nodes} = __render0();
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
