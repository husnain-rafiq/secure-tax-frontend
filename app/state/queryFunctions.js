import http from '../service/http';
import { APIS } from '../utils/constants';
import { insertParams } from '../utils/helper';

const {
  LOGIN,
  USERS,
  FORGET_PASSWORD,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  PAYMENT_BATCH,
} = APIS;

// USER CRUD

export const updateUser = (payload) => {
  const { userId, updatedData } = payload;
  return http.put(`${USERS}/${userId}`, updatedData);
};

export const getUserById = (id) => http.get(`${USERS}/${id}`);

export const createUser = (payload) => http.post(USERS, payload);

export const fetchUsers = ({ queryKey }) => {
  let url;
  const { page, pageSize, searchUsersInitialValue } = queryKey[1];
  if (searchUsersInitialValue) {
    url = `${USERS}?${insertParams(
      searchUsersInitialValue
    )}&page=${page}&pageSize=${pageSize}`;
  } else {
    url = `${USERS}?page=${page}&pageSize=${pageSize}`;
  }
  return http.get(url);
};
export const login = (payload) => http.post(LOGIN, payload);

export const resetPassword = (payload) => http.post(RESET_PASSWORD, payload);

export const forgetPassword = (payload) => http.post(FORGET_PASSWORD, payload);
export const fetchPaymentBatches = ({ queryKey }) => {
  let url;
  const { page, pageSize, filters } = queryKey[1];
  if (filters) {
    url = `${PAYMENT_BATCH}?${insertParams(
      filters
    )}&page=${page}&pageSize=${pageSize}`;
  } else {
    url = `${PAYMENT_BATCH}?page=${page}&pageSize=${pageSize}`;
  }
  return http.get(url);
};
export const changePassword = (payload) => http.put(CHANGE_PASSWORD, payload);

export const createPaymentBatch = (payload) =>
  http.post(PAYMENT_BATCH, payload);

export const closePaymentBatch = (payload) =>
  http.put(`${PAYMENT_BATCH}`, payload);

export const reopenPaymentBatch = (payload) =>
  http.put(`${PAYMENT_BATCH}`, payload);

export const changePaymentBatch = (payload) =>
  http.put(`${PAYMENT_BATCH}`, payload);
export const deleteUser = (payload) => http.delete(`${USERS}${payload}/`);
