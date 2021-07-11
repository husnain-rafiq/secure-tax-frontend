import { object, mixed, string, ref } from 'yup';
import { MAX_UPLOADABLE_IMAGE_SIZE_IN_MBS } from '../../../utils/constants';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const userFormValidaton = object().shape({
  photo: mixed().when('isProfilePicAttached', {
    is: true,
    then: mixed()
      .test('checkEmptyFile', 'Empty File', (value) => value && value.size)
      .test(
        'fileSize',
        'File too large',
        (value) =>
          value &&
          value.size &&
          value.size / 1024 / 1024 <= MAX_UPLOADABLE_IMAGE_SIZE_IN_MBS
      )
      .test(
        'fileFormat',
        'Unsupported Format',
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  }),
  username: string()
    .min(1, 'Too Short!')
    .max(200, 'Too Long!')
    .required('*User Name Required')
    .noWhitespace(),

  firstName: string()
    .min(1, 'Too Short!')
    .max(200, 'Too Long!')
    .required('*First Name Required')
    .noWhitespace(),
  lastName: string()
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
  address: string().required('*Address Required'),
  role: string().required('*Role Required'),
  password: string()
    .required('*Password Required')
    .matches(/^(?!\s+$)/, '* This field cannot contain only blankspaces')
    .min(4, 'Too Short')
    .max(15, 'Exceeded Maximum Characters Limit'),
  confirmPassword: string()
    .required('*Confirm Password Required')
    .oneOf([ref('password'), null], 'Passwords must match'),
});
