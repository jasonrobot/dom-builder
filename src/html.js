import * as R from 'ramda';

import * as htmlTags from 'html-tags';

function element(tag, attrs = [], ...children) {
    if ('string' === typeof attrs) {
        children = [text(attrs)];
        attrs = [];
    }

    if (Array.isArray(attrs) === false) {
        throw 'attrs must be an array';
    }

    if (Array.isArray(children) === false) {
        throw 'children must be an array or a string to make a text node child';
    }

    const el = document.createElement(tag);
    R.forEach(attr => el.setAttributeNode(attr), attrs);

    R.forEach(child => el.appendChild(child), children);
    return el;
};

const tagFns = htmlTags.map(tag => [tag, R.partial(element, [tag])]);

function text(content){
    return document.createTextNode(String(content));
}

export default {
    ...Object.fromEntries(tagFns),
    element,
    text,
};