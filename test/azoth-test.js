import { _, $ } from 'azoth';
import { BehaviorSubject } from 'rxjs-es';

const name = new BehaviorSubject('foo');

const template = (name=$) => _`<span>Hello *${name}</span>`;

const fragment = template(name);

document.body.appendChild(fragment);

