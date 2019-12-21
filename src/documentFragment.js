import * as R from 'ramda';

export default function documentFragment(...children) {
    const fragment = new DocumentFragment();
    R.forEach(child => fragment.appendChild(child), children);
    return fragment;
}

