/**
* Progress bar API.
* @constructor
* @param {string} link - Link on a page element that displays the properties of an object.
*/
function Progress( link ) {
			var element = document.getElementById(link);
			var pie = document.getElementById('pie');
			
			/**
		     * Set percent value of a progress element.
		     * @access public
		     * @param {string} value - Percent value of a progress.
		     */
			this.setValue = function ( value ) {
				this.value = value;
				this.updateProgress();
			}
			
			/**
		     * Set status of element.
		     * @access public
		     * @param {string} value - Provides permission to use this property ('yes' or ' ').
		     * @param {string} property - Name of property.
		     */
			this.setMod = function( property , value ){
				element.setAttribute( property , value );
			}
			/** 
			* This function performs a graphical representation of the value.
			* @access public
			* 
			*/
			this.updateProgress = function ( ) {
				var total = Math.PI*380;
				var val = ((this.value * total) / 100);
				result = val + ' ' + total;
				pie.setAttribute('stroke-dasharray',result);
			}
};