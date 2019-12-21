
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
import domfu from './src/documentFragment.js';
console.log(domfu);
const D = {
    ...Html,
    ...Attribute,
    domfu
};

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = (new JSDOM(`...`)).window;

// disabled because of https://github.com/jsdom/jsdom/issues/2274
xdescribe('domfu', () => {
    it('should return a document fragment', () => {
        const result = D.domfu();
        expect(result).toBeInstanceOf(DocumentFragment);
    });

    it('should accept an array of children', () => {
        const result = D.domfu(D.div(), D.div());
        expect(result.childCount).toEqual(2);
    });

    it('should append results directly as children', () => {
        const result = D.domfu(D.div(), D.div());
        const root = D.div([], [result]);
        expect(root.childCount).toEqual(2);
    });
});

describe('the basics', () => {
    it('can be tested', () => {
        // console.log(D);
        const div = D.div([]);
        // console.log(div.outerHTML);
        expect(div).toBeDefined();
    });

    it('should default to empty attrs and children', () => {
        let div = D.div();
        expect(div).toBeDefined();

        div = D.div([]);
        expect(div).toBeDefined();
    });
});

describe('children', () => {
    it('should be able to nest a bunch of nodes', () => {
        const dom = Array(100)
              .fill('div')
              .reduce(
                  (acc, next) => D[next]([], acc),
                  D.div()
              );
        let cur = dom;
        let count = 0;
        while (cur.childElementCount > 0) {
            count += 1;
            cur = cur.childNodes[0];
        }
        expect(count).toEqual(100);
    });

    it('should add multiple children at a time', () => {
        const dom = D.div([],
                          D.div(),
                          D.div(),
                          D.div());
        expect(dom.childElementCount).toEqual(3);
    });

    it('should add a text node child if ony parameter is a string', () => {
        const dom = D.div('test');
        expect(dom.textContent).toEqual('test');
    });
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
