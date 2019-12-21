import * as R from 'ramda';

const tags = [
    'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b',
    'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
    'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data',
    'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl',
    'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer',
    'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header',
    'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins',
    'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark',
    'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol',
    'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre',
    'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script',
    'section', 'select', 'slot', 'small', 'source', 'span', 'strong',
    'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td',
    'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title',
    'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'
];

function elem(tag, attrs = [], ...children) {
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

const tagFns = tags.map(tag => [tag, R.partial(elem, [tag])]);

function text(content){
    return document.createTextNode(String(content));
}

export default {
    ...Object.fromEntries(tagFns),
    text
};
