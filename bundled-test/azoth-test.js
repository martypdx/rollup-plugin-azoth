import { _, $ } from 'azoth';
import { Subject } from 'rxjs-es';
import display from './display';
import controls from './controls';


const template = (name=$) => _`
    <header>
    ${display(name)}#
    </header>
    <main>
    ${controls(name)}#
    </main>
`;

const name = new Subject();
const fragment = template(name);
document.body.appendChild(fragment);

