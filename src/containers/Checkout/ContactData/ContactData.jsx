import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Piotr Glejzer',
        address: {
          stret: 'Lol1',
          zipCode: '45252',
          country: 'Poland',
        },
        email: 'jtest@rata.aeda',
      },
      deliveryMethod: 'the fastest',
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form action="">
        <input
          className={classes.Input}
          type="text"
          name="name"
          id=""
          placeholder="your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          id=""
          placeholder="your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          id=""
          placeholder="your street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          id=""
          placeholder="your postal"
        />
        <Button btnType="Succes" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
