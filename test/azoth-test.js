import { _, $ } from 'azoth';
import { Subject } from 'rxjs-es';

const name = new Subject('foo');

const template = (name=$) => _`<span>Hello *${name}</span>`;

const fragment = template(name);

document.body.appendChild(fragment);

