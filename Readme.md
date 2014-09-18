[![Travis build status](https://travis-ci.org/bboyle/Generate-ID.svg?branch=master)](https://travis-ci.org/bboyle/Generate-ID)
[![devDependency Status](https://david-dm.org/bboyle/Generate-ID/dev-status.svg)](https://david-dm.org/bboyle/Generate-ID#info=devDependencies)

# Generate ID

Generate unique ID attributes on DOM elements.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/bboyle/Generate-ID/master/dist/generate-id.min.js
[max]: https://raw.github.com/bboyle/Generate-ID/master/dist/generate-id.js

### Install using bower

`bower install jquery.generate-id`

## Usage

- this method is *chainable*
- existing `id` attributes **will not** be overwritten
- use `.attr( 'id' )` if you need to get the generate ID value

### .generateId()

Given:

```html
<p>First paragraph</p>
<p id="second">Second paragraph</p>
<p>Third paragraph</p>
```

When:

```javascript
$( 'p' ).generateId();
```

Then:

```html
<p id="id">First paragraph</p>
<p id="second">Second paragraph</p>
<p id="id1">Third paragraph</p>
```

### .generateId( _preferredId_ )

Attempts to use the suggested _preferredId_ as the new id value.

_preferredId_ will:

- be converted to lowercase
- letters, digits, underscores and hyphens are allowed
- whitespace, punctuation and special characters are replaced by a `-` hyphen
- **not** be exhaustively checked for validity (e.g. it should start with a letter)
- have an integer appended to the end (if _preferredId_ is already used in the DOM)

Given:

```html
<p>First paragraph</p>
<p id="second">Second paragraph</p>
<p>Third paragraph</p>
```

When:

```javascript
$( 'p' ).generateId( 'para' );
```

Then:

```html
<p id="para">First paragraph</p>
<p id="second">Second paragraph</p>
<p id="para1">Third paragraph</p>
```


## Background

Small bit of jquery code to set `@id` on elements.

Inspired by `generate-id()` from [XSLT][xslt-id-func].

[xslt-id-func]: http://www.w3.org/TR/xslt20/#generate-id "generate-id() in XSLT"
