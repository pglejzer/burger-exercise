import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[ORder summary] update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span className={{ textTransform: 'capitalize' }}>
            {igKey}:{this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}$</strong>
        </p>
        <p>Contiune to Checkout?</p>
        <div className={classes.OrderSummary}>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
            Cancel
          </Button>
          <Button btnType="Success" clicked={this.props.purchaseContinuted}>
            Contiune
          </Button>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
