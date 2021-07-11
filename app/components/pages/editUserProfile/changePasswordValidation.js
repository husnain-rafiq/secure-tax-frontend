import { object, string, ref } from 'yup';

export const changePasswordValidation = object().shape({
  currentPassword: string()
    .noWhitespace()
    .min(4, 'Too Short')
    .max(15, 'Exceeded Maximum Characters Limit')
    .required('*Current Password Required'),

  newPassword: string()
    .noWhitespace()
    .min(4, 'Too Short')
    .max(15, 'Exceeded Maximum Characters Limit')
    .required('*New Password Required'),
  confirmNewPassword: string()
    .noWhitespace()
    .oneOf([ref('newPassword'), null], 'Passwords must match')
    .required('*Confirm Password Required'),
});
