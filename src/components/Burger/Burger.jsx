import React from 'react';
import classes from './Burger.module.css';
import BurgerIngrident from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngrident type="bread-top" />
      <BurgerIngrident type="cheese" />
      <BurgerIngrident type="meat" />
      <BurgerIngrident type="bread-bottom" />
    </div>
  );
};
export default burger;
