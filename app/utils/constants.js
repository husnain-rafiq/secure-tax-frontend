export const STYLE_CONSTANTS = {
  HEADER_WIDTH: '5rem',
  menuWidth: '5rem',
};

export const FILE_ACCEPT_TYPES = {
  imageFiles: 'image/x-png,image/jpeg,image/jpg',
};
export const ROWS_PER_PAGE_OPTIONS = [5, 10, 25, 100];
export const PAGE_SIZE = 10;
export const LOCAL_STORAGE_ENTRIES = { user: 'user' };
export const MAX_UPLOADABLE_IMAGE_SIZE_IN_MBS = 10; // Mb
export const MIN_UPLOADABLE_FILE_SIZE_IN_MBS = 0; // Mb
export const MAX_UPLOADABLE_FILE_SIZE_IN_MBS = 10; // Mb
export const ROLES = {
  ADMIN: 'Admin',
  USER: 'user',
  BALANCINGAGENT: 'Balancer',
  COLLECTINGAGENT: 'Collector',
};
export const DROP_DOWN_USER_ROLES = [
  { label: 'Admin', value: 1 },
  { label: 'Balancer', value: 2 },
  { label: 'Collector', value: 3 },
];
export const APIS = {
  RESET_PASSWORD: '/password-reset/confirm',
  LOGIN: '/login',
  FORGET_PASSWORD: '/password-reset',
  PAYMENT_BATCH: '/batches',
  USERS: '/users',
  CHANGE_PASSWORD: '/change-password',
};

export const STATUS = {
  PAID: 'Paid',
  OPEN: 'Open',
  REDEEMED: 'Redeemed',
  ADJUDICATED: 'Adjudicated',
  CLOSED: 'Closed',
  UNPAID: 'Unpaid',
  SOLD: 'Sold',
  UNDERREVIEW: 'Under review',
  SETTLED: 'Settled',
  UNSETTLED: 'Unsettled',
  REJECTED: 'rejected',
};

export const BATCH_STATUS = [
  { label: 'Open', value: 1 },
  { label: 'Closed', value: 2 },
  { label: 'UnderReview', value: 3 },
  { label: 'Settled', value: 4 },
  { label: 'Unsettled', value: 5 },
];

export const PAYMENT_STATUS = {
  OPEN: 1,
  CLOSED: 2,
  UNDER_REVIEW: 3,
  SETTLED: 4,
  UNSETTLED: 5,
};
