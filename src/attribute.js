import * as R from 'ramda';

// const attrNames = [
//     'accesskey', 'action', 'alt', 'async',
//     'autocomplete', 'autofocus', 'autoplay', 'charset', 'checked',
//     'citeAttr', 'classAttr', 'cols', 'colspan', 'content', 'contenteditable',
//     'controls', 'coords', 'data', 'datetime', 'default',
//     'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable',
//     'dropzone', 'enctype', 'for', 'formAttr', 'formaction', 'headers',
//     'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'id',
//     'ismap', 'kind', 'labelAttr', 'lang', 'list', 'loop', 'low', 'max',
//     'maxlength', 'media', 'method', 'min', 'multiple', 'muted', 'name',
//     'novalidate', 'onabort', 'onafterprint', 'onbeforeprint',
//     'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough',
//     'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncuechange',
//     'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter',
//     'ondragleave', 'ondragover', 'ondragstart', 'ondrop',
//     'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus',
//     'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress',
//     'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata',
//     'onloadstart', 'onmousedown', 'onmousemove', 'onmouseout',
//     'onmouseover', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline',
//     'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay',
//     'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onreset',
//     'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking',
//     'onselect', 'onstalled', 'onstorage', 'onsubmit', 'onsuspend',
//     'ontimeupdate', 'ontoggle', 'onunload', 'onvolumechange',
//     'onwaiting', 'onwheel', 'open', 'optimum', 'pattern', 'placeholder',
//     'poster', 'preload', 'readonly', 'rel', 'required', 'reversed',
//     'rows', 'rowspan', 'sandbox', 'scope', 'selected', 'shape', 'size',
//     'sizes', 'spanAttr', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset',
//     'start', 'step', 'styleAttr', 'tabindex', 'target', 'titleAttr',
//     'translate', 'type', 'usemap', 'value', 'width', 'wrap'
// ];

const attr = (attrName, ...attrValue) => {
    const attr = document.createAttribute(attrName);
    attr.value = attrValue.join(' ');
    console.log(`attr val: ${attr.value}`);
    return attr;
};


export function accesskey() { return R.partial(attr, 'accesskey'); }
export function action() { return R.partial(attr, 'action'); }
export function alt() { return R.partial(attr, 'alt'); }
export function async() { return R.partial(attr, 'async'); }
export function autocomplete() { return R.partial(attr, 'autocomplete'); }
export function autofocus() { return R.partial(attr, 'autofocus'); }
export function autoplay() { return R.partial(attr, 'autoplay'); }
export function charset() { return R.partial(attr, 'charset'); }
export function checked() { return R.partial(attr, 'checked'); }
export function citeAttr() { return R.partial(attr, 'citeAttr'); }
export function classAttr() { return R.partial(attr, 'classAttr'); }
export function cols() { return R.partial(attr, 'cols'); }
export function colspan() { return R.partial(attr, 'colspan'); }
export function content() { return R.partial(attr, 'content'); }
export function contenteditable() { return R.partial(attr, 'contenteditable'); }
export function controls() { return R.partial(attr, 'controls'); }
export function coords() { return R.partial(attr, 'coords'); }
export function data() { return R.partial(attr, 'data'); }
export function datetime() { return R.partial(attr, 'datetime'); }
// default
export function defaultAttr() { return R.partial(attr, 'default'); }
export function defer() { return R.partial(attr, 'defer'); }
export function dir() { return R.partial(attr, 'dir'); }
export function dirname() { return R.partial(attr, 'dirname'); }
export function disabled() { return R.partial(attr, 'disabled'); }
export function download() { return R.partial(attr, 'download'); }
export function draggable() { return R.partial(attr, 'draggable'); }
export function dropzone() { return R.partial(attr, 'dropzone'); }
export function enctype() { return R.partial(attr, 'enctype'); }
// for
export function forAttr() { return R.partial(attr, 'for'); }
export function formAttr() { return R.partial(attr, 'formAttr'); }
export function formaction() { return R.partial(attr, 'formaction'); }
export function headers() { return R.partial(attr, 'headers'); }
export function height() { return R.partial(attr, 'height'); }
export function hidden() { return R.partial(attr, 'hidden'); }
export function high() { return R.partial(attr, 'high'); }
export function href() { return R.partial(attr, 'href'); }
export function hreflang() { return R.partial(attr, 'hreflang'); }
//http-equiv
export function httpEquiv() { return R.partial(attr, 'http-equiv'); }
export function id() { return R.partial(attr, 'id'); }
export function ismap() { return R.partial(attr, 'ismap'); }
export function kind() { return R.partial(attr, 'kind'); }
export function labelAttr() { return R.partial(attr, 'labelAttr'); }
export function lang() { return R.partial(attr, 'lang'); }
export function list() { return R.partial(attr, 'list'); }
export function loop() { return R.partial(attr, 'loop'); }
export function low() { return R.partial(attr, 'low'); }
export function max() { return R.partial(attr, 'max'); }
export function maxlength() { return R.partial(attr, 'maxlength'); }
export function media() { return R.partial(attr, 'media'); }
export function method() { return R.partial(attr, 'method'); }
export function min() { return R.partial(attr, 'min'); }
export function multiple() { return R.partial(attr, 'multiple'); }
export function muted() { return R.partial(attr, 'muted'); }
export function name() { return R.partial(attr, 'name'); }
export function novalidate() { return R.partial(attr, 'novalidate'); }
export function onabort() { return R.partial(attr, 'onabort'); }
export function onafterprint() { return R.partial(attr, 'onafterprint'); }
export function onbeforeprint() { return R.partial(attr, 'onbeforeprint'); }
export function onbeforeunload() { return R.partial(attr, 'onbeforeunload'); }
export function onblur() { return R.partial(attr, 'onblur'); }
export function oncanplay() { return R.partial(attr, 'oncanplay'); }
export function oncanplaythrough() { return R.partial(attr, 'oncanplaythrough'); }
export function onchange() { return R.partial(attr, 'onchange'); }
export function onclick() { return R.partial(attr, 'onclick'); }
export function oncontextmenu() { return R.partial(attr, 'oncontextmenu'); }
export function oncopy() { return R.partial(attr, 'oncopy'); }
export function oncuechange() { return R.partial(attr, 'oncuechange'); }
export function oncut() { return R.partial(attr, 'oncut'); }
export function ondblclick() { return R.partial(attr, 'ondblclick'); }
export function ondrag() { return R.partial(attr, 'ondrag'); }
export function ondragend() { return R.partial(attr, 'ondragend'); }
export function ondragenter() { return R.partial(attr, 'ondragenter'); }
export function ondragleave() { return R.partial(attr, 'ondragleave'); }
export function ondragover() { return R.partial(attr, 'ondragover'); }
export function ondragstart() { return R.partial(attr, 'ondragstart'); }
export function ondrop() { return R.partial(attr, 'ondrop'); }
export function ondurationchange() { return R.partial(attr, 'ondurationchange'); }
export function onemptied() { return R.partial(attr, 'onemptied'); }
export function onended() { return R.partial(attr, 'onended'); }
export function onerror() { return R.partial(attr, 'onerror'); }
export function onfocus() { return R.partial(attr, 'onfocus'); }
export function onhashchange() { return R.partial(attr, 'onhashchange'); }
export function oninput() { return R.partial(attr, 'oninput'); }
export function oninvalid() { return R.partial(attr, 'oninvalid'); }
export function onkeydown() { return R.partial(attr, 'onkeydown'); }
export function onkeypress() { return R.partial(attr, 'onkeypress'); }
export function onkeyup() { return R.partial(attr, 'onkeyup'); }
export function onload() { return R.partial(attr, 'onload'); }
export function onloadeddata() { return R.partial(attr, 'onloadeddata'); }
export function onloadedmetadata() { return R.partial(attr, 'onloadedmetadata'); }
export function onloadstart() { return R.partial(attr, 'onloadstart'); }
export function onmousedown() { return R.partial(attr, 'onmousedown'); }
export function onmousemove() { return R.partial(attr, 'onmousemove'); }
export function onmouseout() { return R.partial(attr, 'onmouseout'); }
export function onmouseover() { return R.partial(attr, 'onmouseover'); }
export function onmouseup() { return R.partial(attr, 'onmouseup'); }
export function onmousewheel() { return R.partial(attr, 'onmousewheel'); }
export function onoffline() { return R.partial(attr, 'onoffline'); }
export function ononline() { return R.partial(attr, 'ononline'); }
export function onpagehide() { return R.partial(attr, 'onpagehide'); }
export function onpageshow() { return R.partial(attr, 'onpageshow'); }
export function onpaste() { return R.partial(attr, 'onpaste'); }
export function onpause() { return R.partial(attr, 'onpause'); }
export function onplay() { return R.partial(attr, 'onplay'); }
export function onplaying() { return R.partial(attr, 'onplaying'); }
export function onpopstate() { return R.partial(attr, 'onpopstate'); }
export function onprogress() { return R.partial(attr, 'onprogress'); }
export function onratechange() { return R.partial(attr, 'onratechange'); }
export function onreset() { return R.partial(attr, 'onreset'); }
export function onresize() { return R.partial(attr, 'onresize'); }
export function onscroll() { return R.partial(attr, 'onscroll'); }
export function onsearch() { return R.partial(attr, 'onsearch'); }
export function onseeked() { return R.partial(attr, 'onseeked'); }
export function onseeking() { return R.partial(attr, 'onseeking'); }
export function onselect() { return R.partial(attr, 'onselect'); }
export function onstalled() { return R.partial(attr, 'onstalled'); }
export function onstorage() { return R.partial(attr, 'onstorage'); }
export function onsubmit() { return R.partial(attr, 'onsubmit'); }
export function onsuspend() { return R.partial(attr, 'onsuspend'); }
export function ontimeupdate() { return R.partial(attr, 'ontimeupdate'); }
export function ontoggle() { return R.partial(attr, 'ontoggle'); }
export function onunload() { return R.partial(attr, 'onunload'); }
export function onvolumechange() { return R.partial(attr, 'onvolumechange'); }
export function onwaiting() { return R.partial(attr, 'onwaiting'); }
export function onwheel() { return R.partial(attr, 'onwheel'); }
export function open() { return R.partial(attr, 'open'); }
export function optimum() { return R.partial(attr, 'optimum'); }
export function pattern() { return R.partial(attr, 'pattern'); }
export function placeholder() { return R.partial(attr, 'placeholder'); }
export function poster() { return R.partial(attr, 'poster'); }
export function preload() { return R.partial(attr, 'preload'); }
export function readonly() { return R.partial(attr, 'readonly'); }
export function rel() { return R.partial(attr, 'rel'); }
export function required() { return R.partial(attr, 'required'); }
export function reversed() { return R.partial(attr, 'reversed'); }
export function rows() { return R.partial(attr, 'rows'); }
export function rowspan() { return R.partial(attr, 'rowspan'); }
export function sandbox() { return R.partial(attr, 'sandbox'); }
export function scope() { return R.partial(attr, 'scope'); }
export function selected() { return R.partial(attr, 'selected'); }
export function shape() { return R.partial(attr, 'shape'); }
export function size() { return R.partial(attr, 'size'); }
export function sizes() { return R.partial(attr, 'sizes'); }
export function spanAttr() { return R.partial(attr, 'spanAttr'); }
export function spellcheck() { return R.partial(attr, 'spellcheck'); }
export function src() { return R.partial(attr, 'src'); }
export function srcdoc() { return R.partial(attr, 'srcdoc'); }
export function srclang() { return R.partial(attr, 'srclang'); }
export function srcset() { return R.partial(attr, 'srcset'); }
export function start() { return R.partial(attr, 'start'); }
export function step() { return R.partial(attr, 'step'); }
export function styleAttr() { return R.partial(attr, 'styleAttr'); }
export function tabindex() { return R.partial(attr, 'tabindex'); }
export function target() { return R.partial(attr, 'target'); }
export function titleAttr() { return R.partial(attr, 'titleAttr'); }
export function translate() { return R.partial(attr, 'translate'); }
export function type() { return R.partial(attr, 'type'); }
export function usemap() { return R.partial(attr, 'usemap'); }
export function value() { return R.partial(attr, 'value'); }
export function width() { return R.partial(attr, 'width'); }
export function wrap() { return R.partial(attr, 'wrap'); }
