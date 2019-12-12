import * as R from 'ramda';

const attrNames = [
    'style', 'property', 'attribute', 'map',
    'id', 'title', 'hidden',
    'type', 'value', 'checked', 'placeholder', 'selected',
    'accept', 'acceptCharset', 'action', 'autocomplete', 'autofocus',
    'disabled', 'enctype', 'list', 'maxlength', 'minlength', 'method', 'multiple',
    'name', 'novalidate', 'pattern', 'readonly', 'required', 'size', 'for', 'form',
    'max', 'min', 'step',
    'cols', 'rows', 'wrap',
    'href', 'target', 'download', 'hreflang', 'media', 'ping', 'rel',
    'ismap', 'usemap', 'shape', 'coords',
    'src', 'height', 'width', 'alt',
    'autoplay', 'controls', 'loop', 'preload', 'poster', 'default', 'kind', 'srclang',
    'sandbox', 'srcdoc',
    'reversed', 'start',
    'align', 'colspan', 'rowspan', 'headers', 'scope',
    'accesskey', 'contenteditable', 'contextmenu', 'dir', 'draggable', 'dropzone',
    'itemprop', 'lang', 'spellcheck', 'tabindex',
    'cite', 'datetime', 'pubdate', 'manifest',
];

const attr = (attrName, ...attrValue) => {
    const attr = document.createAttribute(attrName);
    attr.value = attrValue.join(' ');
    console.log(`attr val: ${attr.value}`);
    return attr;
};

export default {
    ...Object.fromEntries(
        attrNames.map(attrName => [attrName, R.partial(attr, [attrName])])
    ),
    // class needs to be declared this way, since 'class' is a reserved word.
    classes: R.partial(attr, ['class']),
};
