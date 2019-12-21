import * as R from 'ramda';

// const tags = [
//     'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b',
//     'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
//     'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data',
//     'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl',
//     'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer',
//     'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header',
//     'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins',
//     'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark',
//     'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol',
//     'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre',
//     'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script',
//     'section', 'select', 'slot', 'small', 'source', 'span', 'strong',
//     'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td',
//     'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title',
//     'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'
// ];



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

// const tagFns = tags.map(tag => [tag, R.partial(elem, [tag])]);

export function text(content){
    return document.createTextNode(String(content));
}

export function customElement(tagName) {
    return R.partial(elem, tagName);
}

// What's all this?
// I want the interface of my module to allow users to do:
// import * as D from domfu;
// -- or --
// import { div, span } from domfu;
//
// This means default exports won't work. You end up doing:
// import D from domfu; // Thats fine, even nicer than before
// -- or --
// import D from domfu;
// const { div, span } = D; // That kinda sucks...
//
// Why do I want to be able to import specific names? I dunno. Ramda lets me do it,
// and I like not having a namespace variable appear EVERYWHERE, especially when
// making a DSL like this. The destruct assign is *fine* though, in that it works.
//
//TODO should genereate these somehow. JS wishlist: macros
export function a() { return R.partial(elem, 'a'); }
export function abbr() { return R.partial(elem, 'abbr'); }
export function address() { return R.partial(elem, 'address'); }
export function area() { return R.partial(elem, 'area'); }
export function article() { return R.partial(elem, 'article'); }
export function aside() { return R.partial(elem, 'aside'); }
export function audio() { return R.partial(elem, 'audio'); }
export function b() { return R.partial(elem, 'b'); }
export function base() { return R.partial(elem, 'base'); }
export function bdi() { return R.partial(elem, 'bdi'); }
export function bdo() { return R.partial(elem, 'bdo'); }
export function blockquote() { return R.partial(elem, 'blockquote'); }
export function body() { return R.partial(elem, 'body'); }
export function br() { return R.partial(elem, 'br'); }
export function button   () { return R.partial(elem, 'button'); }
export function canvas() { return R.partial(elem, 'canvas'); }
export function caption() { return R.partial(elem, ') { return'); }
export function cite() { return R.partial(elem, 'cite'); }
export function code() { return R.partial(elem, 'code'); }
export function col() { return R.partial(elem, 'col'); }
export function colgroup() { return R.partial(elem, 'colgroup'); }
export function data() { return R.partial(elem, 'data'); }
export function datalist() { return R.partial(elem, 'datalist'); }
export function dd() { return R.partial(elem, 'dd'); }
export function del() { return R.partial(elem, 'del'); }
export function details() { return R.partial(elem, 'details'); }
export function dfn() { return R.partial(elem, 'dfn'); }
export function dialog() { return R.partial(elem, 'dialog'); }
export function div() { return R.partial(elem, 'div'); }
export function dl() { return R.partial(elem, 'dl'); }
export function dt() { return R.partial(elem, 'dt'); }
export function em() { return R.partial(elem, 'em'); }
export function embed() { return R.partial(elem, 'embed'); }
export function fieldset() { return R.partial(elem, 'fieldset'); }
export function figcaption() { return R.partial(elem, ') { return'); }
export function figure() { return R.partial(elem, 'figure'); }
export function footer() { return R.partial(elem, 'footer'); }
export function form() { return R.partial(elem, 'form'); }
export function h1() { return R.partial(elem, 'h1'); }
export function h2() { return R.partial(elem, 'h2'); }
export function h3() { return R.partial(elem, 'h3'); }
export function h4() { return R.partial(elem, 'h4'); }
export function h5() { return R.partial(elem, 'h5'); }
export function h6() { return R.partial(elem, 'h6'); }
export function head() { return R.partial(elem, 'head'); }
export function header() { return R.partial(elem, 'header'); }
export function hgroup() { return R.partial(elem, 'hgroup'); }
export function hr() { return R.partial(elem, 'hr'); }
export function html() { return R.partial(elem, 'html'); }
export function i() { return R.partial(elem, 'i'); }
export function iframe() { return R.partial(elem, 'iframe'); }
export function img() { return R.partial(elem, 'img'); }
export function input() { return R.partial(elem, 'input'); }
export function ins() { return R.partial(elem, 'ins'); }
export function kbd() { return R.partial(elem, 'kbd'); }
export function label() { return R.partial(elem, 'label'); }
export function legend() { return R.partial(elem, 'legend'); }
export function li() { return R.partial(elem, 'li'); }
export function link() { return R.partial(elem, 'link'); }
export function main() { return R.partial(elem, 'main'); }
export function map() { return R.partial(elem, 'map'); }
export function mark() { return R.partial(elem, 'mark'); }
export function menu() { return R.partial(elem, 'menu'); }
export function meta() { return R.partial(elem, 'meta'); }
export function meter() { return R.partial(elem, 'meter'); }
export function nav() { return R.partial(elem, 'nav'); }
export function noscript() { return R.partial(elem, 'noscript'); }
export function object() { return R.partial(elem, 'object'); }
export function ol() { return R.partial(elem, 'ol'); }
export function optgroup() { return R.partial(elem, 'optgroup'); }
export function option() { return R.partial(elem, ') { return'); }
export function output() { return R.partial(elem, 'output'); }
export function p() { return R.partial(elem, 'p'); }
export function param() { return R.partial(elem, 'param'); }
export function picture() { return R.partial(elem, 'picture'); }
export function pre() { return R.partial(elem, 'pre'); }
export function progress() { return R.partial(elem, 'progress'); }
export function q() { return R.partial(elem, 'q'); }
export function rp() { return R.partial(elem, 'rp'); }
export function rt() { return R.partial(elem, 'rt'); }
export function ruby() { return R.partial(elem, 'ruby'); }
export function s() { return R.partial(elem, 's'); }
export function samp() { return R.partial(elem, 'samp'); }
export function script() { return R.partial(elem, 'script'); }
export function section() { return R.partial(elem, ') { return'); }
export function select() { return R.partial(elem, 'select'); }
export function slot() { return R.partial(elem, 'slot'); }
export function small() { return R.partial(elem, 'small'); }
export function source() { return R.partial(elem, 'source'); }
export function span() { return R.partial(elem, 'span'); }
export function strong() { return R.partial(elem, 'strong'); }
export function style() { return R.partial(elem, 'style'); }
export function sub() { return R.partial(elem, 'sub'); }
export function summary() { return R.partial(elem, 'summary'); }
export function sup() { return R.partial(elem, 'sup'); }
export function svg() { return R.partial(elem, 'svg'); }
export function table() { return R.partial(elem, 'table'); }
export function tbody() { return R.partial(elem, 'tbody'); }
export function td() { return R.partial(elem, 'td'); }
export function template() { return R.partial(elem, 'template'); }
export function textarea() { return R.partial(elem, 'textarea'); }
export function tfoot() { return R.partial(elem, 'tfoot'); }
export function th() { return R.partial(elem, 'th'); }
export function thead() { return R.partial(elem, 'thead'); }
export function time() { return R.partial(elem, 'time'); }
export function title() { return R.partial(elem, 'title'); }
export function tr() { return R.partial(elem, 'tr'); }
export function track() { return R.partial(elem, 'track'); }
export function u() { return R.partial(elem, 'u'); }
export function ul() { return R.partial(elem, 'ul'); }
// var
export function video() { return R.partial(elem, 'video'); }
export function wbr() { return R.partial(elem, 'wbr'); }
