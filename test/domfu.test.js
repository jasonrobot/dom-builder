import domfu from '../index.js';

const {
    element: E,
    attribute: A,
    documentFragment: D,
} = domfu;

import {
    forEachObjIndexed,
    omit,
} from 'ramda';

const expect = require( 'chai' ).expect;

describe( 'domfu', () => {
    describe( 'basic test', () => {
        it( 'should load and run', () => {
            console.log( E.div() );
            expect( E.div() ).to.not.be.undefined;
        } );
    } );

    describe( 'each element', () => {
        forEachObjIndexed( ( fn, name ) => {

            it( `should create a ${name}`, () => {
                expect( fn().outerHTML ).to.equal( document.createElement( name ).outerHTML );
            } );
        }, omit( [ 'element', 'text' ], E ) );
    } );

    it( 'real html test', () => {

        // const realFragment = document.createDocumentFragment();
        // const realH1 = document.createElement('h1');
        // realH1.innerText('Hello!');
        // realFragment.appendChild(realH1);
        // realDiv = document('div');
        // real
        const realElement = document.createElement('div');
        realElement.innerHTML = '<h1>Hello!</h1><div class="content" id="main">test of <strong><em>DOMFU</em></strong><br/><span style="color: red">DOMFU</span> is a better way to create DOM</div>';

        const domfuFragment = D(
            E.h1('Hello!'),
            E.div([A.classAttr('content'), A.id('main')],
                  E.text('test of '),
                  E.strong(E.em('DOMFU')),
                  E.br(),
                  E.span([A.style('color: red')],
                         'DOMFU'),
                  ' is a better way to create DOM'));
        const domfuElement = E.div(domfuFragment);

        expect(realElement.innerHTML).to.equal(domfuElement.innerHTML);
    } );
} );