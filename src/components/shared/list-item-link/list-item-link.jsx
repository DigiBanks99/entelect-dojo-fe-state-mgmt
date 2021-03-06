import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

export default ListItemLink;
