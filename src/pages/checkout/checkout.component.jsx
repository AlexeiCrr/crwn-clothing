// Core
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//Utils
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
//Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
// Styles
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <header className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </header>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">{total ? <span>TOTAL: ${total}</span> : ''}</div>
    <StripeCheckoutButton price={total} />
    <div className="test-warning">
      *Please use the following credit card for payment* <br />
      - Number: 4242 4242 4242 4242 <br />
      - Exp: 01/12 , CCV: 123 <br />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
