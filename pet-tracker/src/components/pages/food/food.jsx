import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FoodService } from '../../services';
import {
  Grid,
  List,
  Fab,
  withStyles,
  ListItem,
  ListItemText
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  fab: {
    position: 'absolute',
    right: 2 * theme.spacing.unit,
    bottom: 2 * theme.spacing.unit
  },
  fabLink: {
    textDecoration: 'none',
    color: theme.palette.background.paper
  }
});

class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petName: props.match.params.petName
    };
  }

  renderFoodTransactions(foodItems) {
    return foodItems.map(food => (
      <ListItem key={food.id}>
        <ListItemText primary={food.description} secondary={food.date} />
      </ListItem>
    ));
  }

  render() {
    const { classes } = this.props;
    const { petName } = this.state;
    const foodItems = FoodService.instance.getFoodTransactions(petName);
    return (
      <Grid className='food'>
        <List>{this.renderFoodTransactions(foodItems)}</List>
        <Fab className={classes.fab} color='secondary'>
          <Link to={`/${petName}/food/new`} className={classes.fabLink}>
            <AddIcon />
          </Link>
        </Fab>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Food);
