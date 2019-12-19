import * as R from 'ramda';

const tags = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'div', 'p', 'hr', 'pre', 'blockquote',
    'span', 'a', 'code', 'em', 'strong', 'i', 'b', 'u', 'sub', 'sup', 'br',
    'ol', 'ul', 'li', 'dl', 'dt', 'dd',
    'img', 'iframe', 'canvas', 'math',
    'form', 'input', 'textarea', 'button', 'select', 'option',
    'section', 'nav', 'article', 'aside', 'header', 'footer', 'address', 'main_',
    'figure', 'figcaption',
    'table', 'caption', 'colgroup', 'col', 'tbody', 'thead', 'tfoot', 'tr', 'td', 'th',
    'fieldset', 'legend', 'label', 'datalist', 'optgroup', 'output', 'progress', 'meter',
    'audio', 'video', 'source', 'track',
    'embed', 'object', 'param',
    'ins', 'del',
    'small', 'cite', 'dfn', 'abbr', 'time', 'var', 'samp', 'kbd', 's', 'q',
    'mark', 'ruby', 'rt', 'rp', 'bdi', 'bdo', 'wbr',
    'details', 'summary', 'menuitem', 'menu'
];

function elem(tag, attrs = [], children = []) {
    if (Array.isArray(attrs) === false) {
        throw 'attrs must be an array';
    }

    if (Array.isArray(children) === false) {
        throw 'children must be an array';
    }

    const el = document.createElement(tag);
    attrs.forEach(attr => el.setAttributeNode(attr));
    // console.log(children);
    children.forEach(child => el.appendChild(child));
    return el;
};

const tagFns = tags.map(tag => [tag, R.partial(elem, [tag])]);

function text(content){
    //return String(content);
    return document.createTextNode(String(content));
}

export default {
    ...Object.fromEntries(tagFns),
    text
};
