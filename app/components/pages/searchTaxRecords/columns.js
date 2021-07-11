import { Box, IconButton } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import clsx from 'clsx';
import React from 'react';
import { useHistory } from 'react-router-dom';
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

const ActionButtons = ({ data }) => {
  const history = useHistory();
  const paymetStatusCheck = () => {
    if (data.status === 'Paid') {
      history.push('/search-tax-records/tax-record-detail');
    } else if (data.status === 'Unpaid') {
      history.push('/search-tax-records/tax-record-detail-unpaid');
    }
  };
  return (
    <Box display="flex">
      <IconButton>
        <EditOutlinedIcon color="secondary" />
      </IconButton>
      <IconButton>
        <VisibilityOutlinedIcon color="secondary" onClick={paymetStatusCheck} />
      </IconButton>
    </Box>
  );
};

export const columns = [
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
    field: 'taxPayerName',
    headerName: 'Tax Payer Name',
    width: 250,
  },
  {
    field: 'taxPayerAddress',
    headerName: 'Tax Payer Address',
    width: 260,
  },
  {
    field: 'ward',
    headerName: 'Ward',
    width: 80,
  },
  {
    field: 'balanceDue',
    headerName: 'Balance Due',
    width: 140,
  },
  {
    field: 'parcelType',
    headerName: 'Parcel Type',
    width: 200,
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
