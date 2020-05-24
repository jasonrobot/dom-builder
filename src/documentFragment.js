const R = require('ramda');

export default function(...children) {
    const fragment = new DocumentFragment();
    R.forEach(child => fragment.appendChild(child), children);
    return fragment;
}
