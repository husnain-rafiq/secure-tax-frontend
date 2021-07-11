import * as Yup from 'yup';

export const resetPasswprdSchema = Yup.object().shape({
  password: Yup.string().required('Required').min(4, 'Too Short'),
  confirmpassword: Yup.string().required('Required').min(4, 'Too Short'),
});
