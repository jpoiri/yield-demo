import MxApplicationRoute from 'ember-mx/routes/mx-application';
import { observer } from '@ember/object';

/**
 * Application route.
 */
export default MxApplicationRoute.extend({
	/**
	 * Handle when the locale was updated.
	 */
	onLocaleUpdated: observer('i18n.locale', function() {
		// add app specific code.
	})
});