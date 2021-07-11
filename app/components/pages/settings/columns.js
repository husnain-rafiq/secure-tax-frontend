import React from 'react';
import Actions from './actions';

export const columns = [
  {
    field: 'username',
    headerName: 'User Name',
    flex: 0.8,
  },

  {
    field: 'phone',
    headerName: 'Phone',
    flex: 0.6,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'role_label',
    headerName: 'Role',
    flex: 1,
  },

  {
    field: 'action',
    headerName: 'Actions',
    flex: 0.5,
    renderCell: (row) => <Actions data={row} />,
  },
];
