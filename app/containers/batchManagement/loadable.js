/**
 *
 * Asynchronously loads the component for BatchManagement
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
