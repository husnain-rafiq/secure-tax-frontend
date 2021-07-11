import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { H5, H6, BodyTextLarge } from 'components';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import avatar from '../../images/avatar.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    marginLeft: '8px',
    borderRadius: '10px',
    boxShadow: '0px 8px 7px 0px #DDDDDD',
  },
  headingBox: {
    borderRadius: '5px',
  },
  heading: {
    padding: '15px',
  },
  rowsHeading: {
    lineHeight: '1.5rem',
  },
  tableHeader: {
    backgroundColor: theme.palette.background.tertiary,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  avatarBox: {
    flex: '0.25',
  },
  avatarAndHeading: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  headingsBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: '0.75',
  },
  footer: {
    lineHeight: '4rem',
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}
const CustomTableCell = withStyles(() => ({
  root: {
    width: 'calc(100%/3)',
  },
}))(TableCell);

const rows = [
  createData('Cameron', 15, '$30'),
  createData('Edward', 12, '$25'),
  createData('Douglas', 10, '$24'),
];
const DailyUserStats = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box bgcolor="primary.main" className={classes.headingBox}>
        <H5 color="light" className={classes.heading}>
          Daily User Stats
        </H5>
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <CustomTableCell>
                <H6 bold color="secondary">
                  Tax Notices Entertained
                </H6>
              </CustomTableCell>
              <CustomTableCell align="center">
                <H6 bold color="secondary">
                  Tax Notices
                </H6>
              </CustomTableCell>
              <CustomTableCell align="center">
                {' '}
                <H6 bold color="secondary">
                  Amount
                </H6>
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <CustomTableCell scope="row">
                  <Box className={classes.avatarAndHeading}>
                    <Box className={classes.avatarBox}>
                      <Avatar
                        alt="Femy Sharp"
                        src={avatar}
                        className={classes.avatar}
                      />
                    </Box>

                    <Box className={classes.headingsBox}>
                      <H6
                        className={classes.rowsHeading}
                        bold
                        color="secondary"
                      >
                        {' '}
                        {row.name}
                      </H6>
                      <H6
                        className={classes.rowsHeading}
                        color="secondary"
                        regular
                      >
                        {' '}
                        Collector
                      </H6>
                    </Box>
                  </Box>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <BodyTextLarge
                    className={classes.rowsHeading}
                    bold
                    color="secondary"
                  >
                    {' '}
                    {row.calories}
                  </BodyTextLarge>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <BodyTextLarge
                    className={classes.rowsHeading}
                    bold
                    color="secondary"
                  >
                    {' '}
                    {row.fat}
                  </BodyTextLarge>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <H6 bold align="center" className={classes.footer}>
          View All
        </H6>
      </Box>
    </Box>
  );
};
export default DailyUserStats;
