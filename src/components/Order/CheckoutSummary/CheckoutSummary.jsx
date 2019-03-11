import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it </h1>
      <div style={{ width: '100%', height: '400px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} on />
      </div>
      <Button btnType="Danger" clicked>
        Cancel
      </Button>
      <Button btnType="Success" clicked>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
