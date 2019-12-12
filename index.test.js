
// document.getElementById('root').appendChild(myHtml);

// const myHtml =
//   div([classList('foo', 'bar')],
//     [
//       div([id('foobar')],
//         [
//           text('hello, world!')
//         ]
//       ),
//       div([],
//         [
//           text('hi')
//         ]
//        )
//     ]
//   )

// import {
//     Html as H,
//     Attribute as A
// } from './index.js';

// import * as D from './index.js';
// do this instead, because nodejs hates default export
import * as Html from './src/html.js';
import * as Attribute from './src/attribute.js';
const D = {
    ...Html,
    ...Attribute,
};

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = (new JSDOM(`...`)).window;

describe('the basics', () => {
    it('can be tested', () => {
        // console.log(D);
        const div = D.div([], []);
        // console.log(div.outerHTML);
        expect(div).toBeDefined();
    });
});

describe('children', () => {

});

describe('attributes', () => {
    describe('classes', () => {
        it('should add multiple classes', () => {
            const dom = (
                D.div(
                    [D.classes('foo', 'bar', 'baz')]
                )
            );

            expect(dom.className).toEqual('foo bar baz');
        });
    });
});
