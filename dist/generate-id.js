/*! Generate ID - v0.1.0 - 2013-03-02
* http://bboyle.github.com/Generate-ID
* Copyright (c) 2013 Ben Boyle; Licensed MIT */

(function( $ ) {
	'use strict';


	/**
	 * Assigns a unique value to `@id` unless hasAttribute( 'id' ) is true
	 *
	 * @param preferredId string to use for id value
	 * 
	 * @return jquery object (chaining supported)
	 */
	$.fn.generateId = function( preferredId ) {

		var i = 1;

		if ( ! preferredId ) {
			preferredId = 'id';
		} else {
			preferredId = $.trim( preferredId.toLowerCase().replace( /[^a-z0-9_]+/g, ' ' )).replace( /\s+/g, '-' );
		}

		return this.each(function() {

			var id;

			if ( ! this.getAttribute( 'id' )) {

				id = preferredId;
				while ( document.getElementById( id )) {
					id = preferredId + String( i );
					i++;
				}
				this.setAttribute( 'id', id );
			}
		});

	};


}( jQuery ));
