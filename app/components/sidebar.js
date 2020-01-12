import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { styled } from '@material-ui/styles'

const SideMenu = styled(List)({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '25%',
  'z-index': 1,
});

function Sidebar({ items, handleClick }) {
  return (
    <SideMenu disablePadding dense>
      { items.map(({ label, name, ...rest }) => (
        <ListItem key={name} button { ...rest } onClick={() => handleClick(name)}>
          <ListItemText>{label}</ListItemText>
        </ListItem>
      ))
      }
    </SideMenu>
  );
}

export default Sidebar;
