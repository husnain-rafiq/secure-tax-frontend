import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { ROLES } from 'utils/constants';

export const menuItems = [
  {
    name: 'Dashboard',
    link: '/home',
    icon: DashboardOutlinedIcon,
    role: [ROLES.ADMIN, ROLES.COLLECTINGAGENT, ROLES.BALANCINGAGENT],
  },
  {
    name: 'Batch Management',
    link: '/batch-management',
    icon: DescriptionOutlinedIcon,
    role: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
  },
  {
    name: 'Tax Record and Payments',
    link: '/search-tax-records',
    icon: PaymentOutlinedIcon,
    role: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
  },

  {
    name: 'Refund Processing',
    link: '/coming-soon',
    icon: AutorenewOutlinedIcon,
    role: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
  },
  {
    name: 'Reverse Transactions',
    link: '/coming-soon',
    icon: RestoreOutlinedIcon,
    role: [ROLES.ADMIN],
  },

  {
    name: 'Change Orders',
    link: '/coming-soon',
    icon: ListAltIcon,
    role: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
  },
  {
    name: 'Deeds & Redemptions Processing',
    link: '/coming-soon',
    icon: DonutLargeOutlinedIcon,
    role: [ROLES.ADMIN, ROLES.COLLECTINGAGENT],
  },

  {
    name: 'Balance Tax Collection',
    link: '/coming-soon',
    icon: AssignmentIndOutlinedIcon,
    role: [ROLES.ADMIN, ROLES.BALANCINGAGENT],
  },
  {
    name: 'Import / Export Data',
    link: '/import-export-data',
    icon: ImportExportOutlinedIcon,
    role: [ROLES.ADMIN],
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: SettingsOutlinedIcon,
    role: [ROLES.ADMIN],
  },

  {
    name: 'Help',
    link: '/coming-soon',
    icon: ContactSupportOutlinedIcon,
    role: [ROLES.ADMIN, ROLES.COLLECTINGAGENT, ROLES.BALANCINGAGENT],
  },
];
