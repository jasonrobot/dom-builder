import * as R from 'ramda';

const attrNames = [
    'accesskey', 'action', 'alt', 'async',
    'autocomplete', 'autofocus', 'autoplay', 'charset', 'checked',
    'citeAttr', 'classAttr', 'cols', 'colspan', 'content', 'contenteditable',
    'controls', 'coords', 'data', 'datetime', 'default',
    'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable',
    'dropzone', 'enctype', 'for', 'formAttr', 'formaction', 'headers',
    'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'id',
    'ismap', 'kind', 'labelAttr', 'lang', 'list', 'loop', 'low', 'max',
    'maxlength', 'media', 'method', 'min', 'multiple', 'muted', 'name',
    'novalidate', 'onabort', 'onafterprint', 'onbeforeprint',
    'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough',
    'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncuechange',
    'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter',
    'ondragleave', 'ondragover', 'ondragstart', 'ondrop',
    'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus',
    'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress',
    'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata',
    'onloadstart', 'onmousedown', 'onmousemove', 'onmouseout',
    'onmouseover', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline',
    'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay',
    'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onreset',
    'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking',
    'onselect', 'onstalled', 'onstorage', 'onsubmit', 'onsuspend',
    'ontimeupdate', 'ontoggle', 'onunload', 'onvolumechange',
    'onwaiting', 'onwheel', 'open', 'optimum', 'pattern', 'placeholder',
    'poster', 'preload', 'readonly', 'rel', 'required', 'reversed',
    'rows', 'rowspan', 'sandbox', 'scope', 'selected', 'shape', 'size',
    'sizes', 'spanAttr', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset',
    'start', 'step', 'style', 'tabindex', 'target', 'titleAttr',
    'translate', 'type', 'usemap', 'value', 'width', 'wrap'
];

const attribute = (attrName, ...attrValue) => {
    const attr = document.createAttribute(attrName);
    attr.value = attrValue.join(' ');
    return attr;
};

export default {
    ...Object.fromEntries(
        attrNames.map(
            attrName => [attrName,
                         R.partial(attribute, [attrName.replace(/Attr/, '')])])
    ),
    attribute
};
