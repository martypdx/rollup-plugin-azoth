/* eslint indent: off, no-undef: off */
(function (rxjsEs,azoth) {
    'use strict';

    const __renderb3a4924d87 = azoth.__getRenderer('b3a4924d87');
    var display = name => {
      const {__fragment, __nodes} = __renderb3a4924d87();
      const __child0 = __nodes[0].childNodes[1];
      const __sub0 = name.subscribe(azoth.__textBinder(__child0));
      __fragment.unsubscribe = () => {
        __sub0.unsubscribe();
      };
      return __fragment;
    };

    const __render0f6332680c = azoth.__getRenderer('0f6332680c');
    var controls = name => {
      const {__fragment, __nodes} = __render0f6332680c();
      const __sub0 = name.subscribe(azoth.__attrBinder(__nodes[0], 'value'));
      azoth.__attrBinder(__nodes[0], 'onchange')(({target}) => {
        name.next(target.value);
      });
      __fragment.unsubscribe = () => {
        __sub0.unsubscribe();
      };
      return __fragment;
    };

    const __render98692304f8 = azoth.__getRenderer('98692304f8');
    const template = name => {
      const {__fragment, __nodes} = __render98692304f8();
      const __child0 = __nodes[0].childNodes[1];
      const __child1 = __nodes[1].childNodes[1];
      const __sub0b = azoth.__blockBinder(__child0);
      __sub0b.observer(display(name));
      const __sub1b = azoth.__blockBinder(__child1);
      __sub1b.observer(controls(name));
      __fragment.unsubscribe = () => {
        __sub0b.unsubscribe();
        __sub1b.unsubscribe();
      };
      return __fragment;
    };
    const name = new rxjsEs.Subject();
    const fragment = template(name);
    document.body.appendChild(fragment);

}(rxjs,azoth));
