import * as R from 'ramda';

export default function domfu(...children) {
    const fragment = new DocumentFragment();
    for(const child of children) {
        console.log(child)
        fragment.appendChild(child);
    }
    return fragment;
}

