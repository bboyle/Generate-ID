Generate ID
===========

Small bit of jquery code to set `@id` on elements.

Inspired by `generate-id()` from [XSLT][xslt-id-func]

Existing `@id` values will not be overwritten.
New `@id` values will be unique in the document.
You can supply a string, which will be used if it is unique.
The string will be set to lowercase, with whitespace replaced by a single hyphen.

[xslt-id-func]: http://www.w3.org/TR/xslt20/#generate-id "generate-id() in XSLT"

Usage
-----

`$( foo ).generateId().attr( 'id' )`
Returns the `@id` of _foo_. Will be an existing `id` or in the format `id123`.

`$( '#foo' ).generateId()`
Does nothing. `@id="foo"` will be preserved.

`$( 'p' ).generateId( 'para' )`
Will set `@id` on all `<p>` elements in the document that don’t already have an id.
The `id` will be in the format `para123`.

	var question1 = $( '<label>Your name</label><input />' );
	question1.find( 'input' ).generateId( question1.find( 'label' ).text() );
	question1.find( 'label' ).attr( 'for', question1.find( 'input' ).attr( 'id' ));

Will result in:

	<label for="your-name">Your name</label><input id="your-name" />
