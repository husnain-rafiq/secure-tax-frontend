import { Box, IconButton } from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import React from 'react';
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

const ActionButtons = () => (
  <>
    <IconButton>
      <EditOutlinedIcon color="secondary" />
    </IconButton>
  </>
);

export const taxPayerDetailsColumn = [
  {
    field: 'year',
    headerName: 'Year',
    width: 100,
  },
  {
    field: 'taxNotice',
    headerName: 'Tax Notice #',
    width: 150,
  },
  {
    field: 'taxPayerName',
    headerName: 'Tax Payer Name',
    width: 200,
  },
  {
    field: 'batchNumber',
    headerName: 'Batch Number',
    width: 200,
  },
  {
    field: 'collectorName',
    headerName: 'Collector Name',
    width: 200,
  },
  {
    field: 'balanceDue',
    headerName: 'Balance Due',
    width: 150,
  },
  {
    field: 'totalPaid',
    headerName: 'Total Paid',
    width: 150,
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

export const columns = [
  {
    field: 'date',
    headerName: 'Date',
    width: 300,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 700,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 200,
  },
  {
    field: 'action',
    headerName: 'Actions',
    width: 100,
    renderCell: () => (
      <Box display="flex">
        <IconButton key="close" aria-label="close" color="inherit">
          <VisibilityOutlinedIcon color="secondary" />
        </IconButton>
      </Box>
    ),
  },
];
