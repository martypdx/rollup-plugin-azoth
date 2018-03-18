import { _, $ } from 'azoth';

export default (name=$) => _`
    <input value=*${name} onchange=${({ target }) => {
        name.next(target.value);
    }}>
`;


