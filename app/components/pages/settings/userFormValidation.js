import { object, string } from 'yup';

export const userFormValidaton = object().shape({
  username: string()
    .min(1, 'Too Short!')
    .max(200, 'Too Long!')
    .required('*User Name Required')
    .noWhitespace(),

  first_name: string()
    .min(1, 'Too Short!')
    .max(200, 'Too Long!')
    .required('*First Name Required')
    .noWhitespace(),
  last_name: string()
    .min(1, 'Too Short!')
    .max(200, 'Too Long!')
    .required('*Last Name Required')
    .noWhitespace(),
  email: string()
    .max(320, 'Invalid')
    .email()
    .required('*Email Required')
    .typeError('* This field cannot contain only blankspaces'),
  phone: string().required('*Phone Required').max(20, 'Too Long!').nullable(),
  role: string().required('*Role Required'),
  address: string().required('*Address Required'),
});
