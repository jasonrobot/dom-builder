const module = {};

import * as Html from './src/html.js';
import * as Attribute from './src/attribute.js';
import documentFragment from './src/documentFragment.js';

export default {
    ...Html,
    ...Attribute,
    domfu
};
