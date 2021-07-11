import Home from '../containers/home/loadable';
import Login from '../containers/login/loadable';
import ForgotPassword from '../containers/forgotPassword/loadable';
import ResetPassword from '../containers/resetPassword/loadable';
import ImportExportContainer from '../containers/importExportData/loadable';
import Settings from '../containers/settings/loadable';
import TaxRecordDetail from '../containers/taxRecordDetail/loadable';
import taxRecordDetailUnpaid from '../containers/taxRecordDetailUnpaid/loadable';
import { ROLES } from '../utils/constants';
import SearchTaxRecord from '../containers/searchTaxRecord/loadable';
import ComingSoon from '../components/comingSoon';
import BatchManagement from '../containers/batchManagement/loadable';
import EditUserProfile from '../containers/editUserProfile/loadable';
import AddNewUser from '../containers/addNewUser/loadable';

const routeTypes = { public: 'public', private: 'private' };
export const routeArray = [
  {
    path: '/',
    component: Login,
    exact: true,
    breadCrumbKey: 'login',
    routeType: routeTypes.public,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true,
    breadCrumbKey: 'forgot password',
    routeType: routeTypes.public,
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    exact: true,
    breadCrumbKey: 'reset password',
    routeType: routeTypes.public,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    breadCrumbKey: 'home',
    routeType: routeTypes.private,
    roles: [ROLES.ADMIN, ROLES.BALANCINGAGENT, ROLES.COLLECTINGAGENT],
  },
  {
    path: '/import-export-data',
    component: ImportExportContainer,
    exact: true,
    breadCrumbKey: 'Import Export Data',
    routeType: routeTypes.private,
    roles: [ROLES.ADMIN],
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
    breadCrumbKey: 'Settings',
    routeType: routeTypes.private,
    roles: [ROLES.ADMIN],
    nestedRoutes: [
      {
        path: '/addNewUser',
        component: AddNewUser,
        exact: true,
        routeType: routeTypes.private,
        roles: [ROLES.ADMIN],
      },
    ],
  },
  {
    path: '/search-tax-records',
    component: SearchTaxRecord,
    exact: true,
    routeType: routeTypes.private,
    breadCrumbKey: 'SearchTaxRecord',
    roles: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
    nestedRoutes: [
      {
        path: '/tax-record-detail',
        component: TaxRecordDetail,
        exact: true,
        routeType: routeTypes.private,
        roles: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
      },
      {
        path: '/tax-record-detail-unpaid',
        component: taxRecordDetailUnpaid,
        exact: true,
        routeType: routeTypes.private,
        roles: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
      },
    ],
  },
  {
    path: '/profile',
    component: EditUserProfile,
    exact: true,
    breadCrumbKey: 'My Profile',
    routeType: routeTypes.private,
    roles: [ROLES.ADMIN, ROLES.BALANCINGAGENT, ROLES.COLLECTINGAGENT],
  },
  {
    path: '/coming-soon',
    component: ComingSoon,
    exact: true,
    breadCrumbKey: 'My Profile',
    routeType: routeTypes.private,
    roles: [ROLES.ADMIN, ROLES.BALANCINGAGENT, ROLES.COLLECTINGAGENT],
  },
  {
    path: '/batch-management',
    component: BatchManagement,
    exact: true,
    breadCrumbKey: 'Batch Management',
    routeType: routeTypes.private,
    roles: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
  },
];
