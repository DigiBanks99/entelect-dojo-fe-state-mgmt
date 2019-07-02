import React, { Component, Fragment } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { FoodService } from 'components/services';
import { FabNew } from 'components/shared';

class Food extends Component {
  constructor(props) {
    super(props);

    console.log(props);

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
    const { petName } = this.state;
    const foodItems = FoodService.instance.getFoodTransactions(petName);
    return (
      <Fragment>
        <List>{this.renderFoodTransactions(foodItems)}</List>
        <FabNew to={`/${petName}/food/new`} />
      </Fragment>
    );
  }
}

export default Food;
