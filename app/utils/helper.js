import Swal from 'sweetalert2';
import { colors } from '../theme/colors';
import '../containers/app/style.css';

// SORITNG FUNCTIONS
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export { getComparator, stableSort };

// insertParams

export function insertParams(params) {
  const str = [];
  const paramObj = { ...params };

  Object.keys(paramObj).forEach((key) => {
    const currentParam = paramObj[key];
    str.push(`${encodeURIComponent(key)}=${encodeURIComponent(currentParam)}`);
  });
  return str.join('&');
}

// REUSEABLE TOAST
export const Toast = ({ icon, ...props }) => {
  mixin.fire({
    icon,
    background: colors.toastColors[icon],
    customClass: {
      title: 'toastTitleColor',
      container: `borderColor${icon}`,
    },
    ...props,
  });
};
const mixin = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 5000,
  width: 300,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

// REUSEABLE MODAL
export const Modal = Swal.mixin({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  customClass: {
    popup: 'popup-class',
  },
  showCancelButton: true,
  confirmButtonColor: colors.primary,
  cancelButtonColor: colors.red,
  confirmButtonText: 'Yes, delete it!',
});

// USAGE;
// Modal({});
export function navigateTo(history, url) {
  history.push(url);
}
