import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { colors } from '../../theme/colors';

const AntTabs = withStyles((theme) => ({
  root: {
    borderBottom: `2px solid ${colors.borderColor}`,
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main,
    height: '5px',
  },
}))(Tabs);
const AntTab = withStyles((theme) => ({
  root: {
    fontSize: theme.typography.body1.fontSize,
    marginRight: '8%',
    color: theme.typography.body1.color,
    '&:hover': {
      color: theme.palette.primary.main,
      opacity: 1,
    },
    '&$selected': {
      fontWeight: 700,
    },
  },
  selected: {},
}))((props) => <Tab {...props} />);

export default function MuiNavigationTab({ value, handleChange, tabOptions }) {
  return (
    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
      {tabOptions.map((option) => (
        <AntTab key={option} label={option} />
      ))}
    </AntTabs>
  );
}
