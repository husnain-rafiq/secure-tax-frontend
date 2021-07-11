import clsx from 'clsx';
import { STATUS } from '../../../utils/constants';

const {
  PAID,
  OPEN,
  REDEEMED,
  ADJUDICATED,
  CLOSED,
  UNPAID,
  SETTLED,
  SOLD,
  UNDERREVIEW,
  REJECTED,
} = STATUS;
export const columns = [
  {
    field: 'id',
    headerName: 'Batch ID #',
    width: 150,
  },
  {
    field: 'openingDate',
    headerName: 'Date Created',
    width: 150,
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 200,
  },
  {
    field: 'statusLabel',
    headerName: 'Status',
    width: 150,
    cellClassName: ({ row: { statusLabel } }) =>
      clsx('super-app', {
        paid: statusLabel === PAID,
        unpaid: statusLabel === UNPAID,
        sold: statusLabel === SOLD,
        rejected: statusLabel === REJECTED,
        open: statusLabel === OPEN,
        redeemed: statusLabel === REDEEMED,
        adjudicated: statusLabel === ADJUDICATED,
        closed: statusLabel === CLOSED,
        underreview: statusLabel === UNDERREVIEW,
        settled: statusLabel === SETTLED,
      }),
  },
  {
    field: 'checkTotal',
    headerName: 'Check',
    width: 100,
  },
  {
    field: 'cashTotal',
    headerName: 'Cash',
    width: 100,
  },
  {
    field: 'runningTotal',
    headerName: 'Running Total',
    width: 150,
  },
];
