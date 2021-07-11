import { Box, IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import React from 'react';
import clsx from 'clsx';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
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

const ActionButtons = () => (
  <Box display="flex">
    <IconButton>
      <EditOutlinedIcon color="secondary" />
    </IconButton>
    <IconButton>
      <DeleteOutlinedIcon color="secondary" />
    </IconButton>
  </Box>
);

export const taxPayerDetailsColumn = [
  {
    field: 'year',
    headerName: 'Year',
    width: 80,
  },
  {
    field: 'taxNotice',
    headerName: 'Tax Notice #',
    width: 130,
  },
  {
    field: 'taxPayername',
    headerName: 'Tax Payer Name',
    width: 200,
  },
  {
    field: 'taxDue',
    headerName: 'Tax Due',
    width: 100,
  },
  {
    field: 'interest',
    headerName: 'Interest',
    width: 100,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    width: 100,
  },
  {
    field: 'other',
    headerName: 'Others',
    width: 100,
  },
  {
    field: 'balanceDue',
    headerName: 'Balance Due',
    width: 140,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    cellClassName: ({ row: { status } }) =>
      clsx('super-app', {
        paid: status === PAID,
        unpaid: status === UNPAID,
        sold: status === SOLD,
        rejected: status === REJECTED,
        open: status === OPEN,
        redeemed: status === REDEEMED,
        adjudicated: status === ADJUDICATED,
        closed: status === CLOSED,
        underreview: status === UNDERREVIEW,
        settled: status === SETTLED,
      }),
  },
  {
    field: 'action',
    headerName: 'Actions',
    renderCell: ({ row }) => <ActionButtons row={row} />,
  },
];
