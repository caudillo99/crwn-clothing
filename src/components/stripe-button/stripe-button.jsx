import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IUdzaHpPmQXLZj1MZJUrF3DdRYhYX0rhe1WI4dsj6q5tbGP2Bj4ab4EjXB582z1k6pBTsQHc97SUYaWyQQwZ5fW007pm2QKE1';
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton;