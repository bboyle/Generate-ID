/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function( $ ) {

	module( 'environment' );

	test( 'test fields are in fixture', 6, function() {

		strictEqual( $( '#foo' ).length, 1, '#foo exists' );
		strictEqual( $( '#bar' ).length, 1, '#bar exists' );
		strictEqual( $( '#qunit-fixture *' ).filter(function() {
			return !! this.getAttribute( 'id' );
		}).length, 2, 'only 2 elements with @id set' );
		strictEqual( $( '#qunit-fixture p' ).length, 3, '3 paragraphs' );
		strictEqual( $( '#qunit-fixture label' ).length, 1, '1 label' );
		strictEqual( $( '#qunit-fixture input' ).length, 1, '1 input' );

	});


	module( 'chaining' );

	test( 'generateId', 4, function() {

		var foo = $( '#foo' ),
			bar = $( '#bar' ),
			fubar = $( '#foo, #bar' );

		strictEqual( fubar.generateId()[ 0 ], foo[ 0 ], 'object.generateId()[ 0 ] is ok' );
		strictEqual( fubar.generateId()[ 1 ], bar[ 0 ], 'object.generateId()[ 1 ] is ok' );

		fubar.generateId().attr( 'title', 'foo' );
		strictEqual( foo.attr( 'title' ), 'foo', '#foo was chained' );
		strictEqual( bar.attr( 'title' ), 'foo', '#bar was chained' );

	});


	module( 'acceptance' );

	test( 'preserves id', 2, function() {
		
		$( '#foo, #bar' ).generateId();
		strictEqual( $( '#foo' ).attr( 'id' ), 'foo', '#foo was preserved' );
		strictEqual( $( '#bar' ).attr( 'id' ), 'bar', '#bar was preserved' );

	});

	test( 'assigns id', 2, function() {
		
		var foo = $( '#qunit-fixture p' ).eq( 0 );
		ok( ! foo.attr( 'id' ), 'no @id for foo' );

		foo.generateId();
		ok( !! foo.attr( 'id' ), 'foo has an @id' );

	});

	test( 'uses suggested id', 1, function() {
		
		var foo = $( '#qunit-fixture p' ).eq( 0 );

		foo.generateId( 'idfoo' );
		strictEqual( foo.attr( 'id' ), 'idfoo', 'suggested id was used' );

	});

	test( 'uses suggested id multiple times', 4, function() {
		
		var p = $( '#qunit-fixture p' ),
			label = $( '#qunit-fixture label' );

		p.generateId( 'para' );
		strictEqual( p.attr( 'id' ), 'para', 'suggested id para was used' );
		strictEqual( p[ 1 ].id, 'para1', 'suggested id para1 was used' );
		strictEqual( p[ 2 ].id, 'para2', 'suggested id para2 was used' );

		label.generateId( 'para' );
		strictEqual( label.attr( 'id' ), 'para3', 'suggested id para3 was used' );

	});

	test( 'formats id suggestions', 2, function() {
		
		var label = $( '#qunit-fixture label' ),
			input = $( '#qunit-fixture input' );
		
		strictEqual( label.text(), 'Your preferred name', 'label is "Your preferred name"' );

		input.generateId( label.text() );
		strictEqual( input.attr( 'id' ), 'your-preferred-name', '"Your preferred name" mapped to "your-preferred-name"' );

	});

	test( 'handles punctuation', 6, function() {
		
		var p = $( '#qunit-fixture p' ).eq( 0 );

		p.generateId( 'This is a test:' );
		strictEqual( p[ 0 ].id, 'this-is-a-test', 'handles colon' );

		p.removeAttr( 'id' ).generateId( 'This is a really long string, (with brackets)?' );
		strictEqual( p[ 0 ].id, 'this-is-a-really-long-string-with-brackets', 'handles , (, ) and ?' );

		p.removeAttr( 'id' ).generateId( ' Whitespace trimmed ' );
		strictEqual( p[ 0 ].id, 'whitespace-trimmed', 'suggested id para2 was used', 'handles leading and trailing whitespace and ?' );

		p.removeAttr( 'id' ).generateId( '<p class="foo">Markup <em>test</em></p>' );
		strictEqual( p[ 0 ].id, 'p-class-foo-markup-em-test-em-p', 'suggested id para2 was used', 'handles markup' );

		p.removeAttr( 'id' ).generateId( 'id-with-dashes - test' );
		strictEqual( p[ 0 ].id, 'id-with-dashes-test', 'suggested id para2 was used', 'handles dashes' );

		p.removeAttr( 'id' ).generateId( '_id_abc_123' );
		strictEqual( p[ 0 ].id, '_id_abc_123', 'suggested id para2 was used', 'handles underscores and numbers' );

	});

}( jQuery ));
