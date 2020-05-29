# Domfu - fast, functional DSL for making markup

Inspired by Elm's HTML, domfu is a functional DSL alternative to template systems like moustache, handlebars, ejs, etc.

Because domfu builds DOM nodes directly, there's no need to ever parse an HTML string, which makes adding portions of markip into a document much, much faster.

## Examples
### Making a template

```
import D from 'domfu';

function myTemplate(name) {
    return (
        D.div([D.id('greeting'), D.classAttr('foobar')],
            'Hello ',
            D.span([D.style('font-weight: bold')],
                D.text(name)
            )
        )
    )
}
```

### Using documentFragments and loops
```
D.documentFragment(
    ...[1, 2, 3, 4].map(number => D.li(D.text(number)))
)
```
