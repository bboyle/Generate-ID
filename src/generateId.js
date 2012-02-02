/**
 * @author		Ben Boyle <benjamins.boyle@gmail.com>
 * @version		0.1
 * @since		2012-02-02
 */
(function( $ ) {
	'use strict';


	/**
	 * Assigns a unique value to `@id` unless hasAttribute( 'id' ) is true
	 *
	 * @return jquery object (chaining supported)
	 */
	$.fn.generateId = function() {

		var id = 'id',
			i = 0;


		return this.each(function() {
			if ( ! this.getAttribute( 'id' )) {
				i++;
				this.setAttribute( 'id', id + i );
			}
		});

	};


}( jQuery ));
