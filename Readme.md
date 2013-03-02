# Generate ID

Generate unique ID attributes on DOM elements.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/bboyle/Generate-ID/master/dist/generate-id.min.js
[max]: https://raw.github.com/bboyle/Generate-ID/master/dist/generate-id.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/generate-id.min.js"></script>
<script>
jQuery(function($) {
  $.awesome(); // "awesome"
});
</script>
```

## Examples

`$( foo ).generateId().attr( 'id' )`

Returns the `@id` of _foo_. Will be an existing `id` or in the format `id123`.

`$( '#foo' ).generateId()`

`$( '#foo' ).generateId( 'bar' )`

Does nothing. `@id="foo"` will be preserved.

`$( foo ).generateId( 'bar' )`

Will set `@id="bar"` if _foo_ has no `id`.
If `bar` is already used in the document, it will use `bar1`, `bar2`, `bar3`, …

`$( 'p' ).generateId( 'para' )`

Will set `@id` on all `<p>` elements in the document that don’t already have an id.
The `id` values be `para`, `para1`, `para2`.

	var question1 = $( '<label>Your name</label><input />' );
	question1.find( 'input' ).generateId( question1.find( 'label' ).text() );
	question1.find( 'label' ).attr( 'for', question1.find( 'input' ).attr( 'id' ));

Will result in:

	<label for="your-name">Your name</label><input id="your-name" />

## Background

Small bit of jquery code to set `@id` on elements.

Inspired by `generate-id()` from [XSLT][xslt-id-func]

Existing `@id` values will not be overwritten.
New `@id` values will be unique in the document.
You can supply a string, which will be used if it is unique.
The string will be set to lowercase, with whitespace replaced by a single hyphen.
This script **will not check** that the string supplied is a valid `@id` value (e.g. starts with a letter)

[xslt-id-func]: http://www.w3.org/TR/xslt20/#generate-id "generate-id() in XSLT"
