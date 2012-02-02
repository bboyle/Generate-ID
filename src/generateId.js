/**
 * @author		Ben Boyle <benjamins.boyle@gmail.com>
 * @version		1.0
 * @since		2012-02-02
 */
(function( $ ) {
	'use strict';


	/**
	 * Assigns a unique value to `@id` unless hasAttribute( 'id' ) is true
	 *
	 * @param preferredId	string to use for id value
	 * 
	 * @return jquery object (chaining supported)
	 */
	$.fn.generateId = function( preferredId ) {

		var i = 1;

		if ( ! preferredId ) {
			preferredId = 'id';
		} else {
			preferredId = preferredId.replace( /\s+/g, '-' ).toLowerCase();
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
