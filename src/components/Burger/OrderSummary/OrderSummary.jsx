import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span className={{ textTransform: 'capitalize' }}>
          {igKey}:{props.ingredients[igKey]}
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
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <p>Contiune to Checkout?</p>
      <div className={classes.OrderSummary}>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinuted}>
          Contiune
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;
