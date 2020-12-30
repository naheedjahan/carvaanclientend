import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input';
import CardView from './CardView';
const STRIPE_ERROR = 'Payment service error. Try again later.';
const SERVER_ERROR = 'Server error. Try again later.';

var stripe = require('stripe-client')('pk_test_51HsOxhKjg2M0AvhzaazkqWm4uWoU4BgE774nGFMtklCwIIr8EbiD6bzsynE8yzl1GfA9JQaoU0GfR0sPb8N8yaII00Ebudrewa');

const STRIPE_PUBLISHABLE_KEY = 'pk_test_51HsOxhKjg2M0AvhzaazkqWm4uWoU4BgE774nGFMtklCwIIr8EbiD6bzsynE8yzl1GfA9JQaoU0GfR0sPb8N8yaII00Ebudrewa';
// import stripe from 'tipsi-stripe';
// stripe.setOptions({
//   publishableKey:'pk_test_51HsOxhKjg2M0AvhzaazkqWm4uWoU4BgE774nGFMtklCwIIr8EbiD6bzsynE8yzl1GfA9JQaoU0GfR0sPb8N8yaII00Ebudrewa'
// })
// import { PaymentsStripe as Stripe } from 'expo-payments-stripe';


// Stripe.setOptionsAsync({
//   publishableKey:'pk_test_51HsOxhKjg2M0AvhzaazkqWm4uWoU4BgE774nGFMtklCwIIr8EbiD6bzsynE8yzl1GfA9JQaoU0GfR0sPb8N8yaII00Ebudrewa'
// });
/**
 * The method sends HTTP requests to the Stripe API.
 * It's necessary to manually send the payment data
 * to Stripe because using Stripe Elements in React 
 * Native apps isn't possible.
 *
 * @param creditCardData the credit card data
 * @return Promise with the Stripe data
 */
const getCreditCardToken = (creditCardData) => {
  console.log('coming here');
  const card = {
    'card[number]': creditCardData.values.number.replace(/ /g, ''),
    'card[exp_month]': creditCardData.values.expiry.split('/')[0],
    'card[exp_year]': creditCardData.values.expiry.split('/')[1],
    'card[cvc]': creditCardData.values.cvc
  };
  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      // Use the correct MIME type for your server
      Accept: 'application/json',
      // Use the correct Content Type to send data to Stripe
      'Content-Type': 'application/x-www-form-urlencoded',
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
    },
    // Use a proper HTTP method
    method: 'post',
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map(key => key + '=' + card[key])
      .join('&')
  }).then(response => response.json()
  );
 
};
/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
const subscribeUser = (creditCardToken) => {
  console.log('come 12');
  console.log('check'+creditCardToken);
  return new Promise((resolve) => {
    console.log('Credit card token\n', creditCardToken);
    setTimeout(() => {
      resolve({ status: true });
    }, 1000)
  });
};
/**
 * The main class that submits the credit card data and
 * handles the response from Stripe.
 */
export default class AddSubscription extends React.Component {
  static navigationOptions = {
    title: 'Subscription page',
  };
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      error: null
    }
  }
  // Handles submitting the payment request
  onSubmit = async (creditCardInput) => {
    console.log(creditCardInput)
    const { navigation } = this.props;
  
const information = {
  card: {
    number: '4242424242424242',
    exp_month: '02',
    exp_year: '21',
    cvc: '999',
    name: 'Billy Joe'
  }
}
    
   // const token = await Stripe.createTokenWithCardAsync(params);
   // console.log(token);
   const card = await stripe.createToken(information);
    const token = card.id;
    console.log(token);

    // Disable the Submit button after the request is sent
    this.setState({ submitted: true });
    // let creditCardToken;
    // try {
    //   // Create a credit card token
    //  // creditCardToken = await getCreditCardToken(creditCardInput);
    //  // creditCardToken = await Stripe.paymentRequestWithCardFormAsync({})
    //   const creditCardToken = await Stripe.createTokenWithCardAsync({number: '4242424242424242', expMonth: 11, expYear: 27, cvc: '223'}).then(res => {
    //     console.log(res.id) 
    // })
    // .catch(error => {
    //     console.log(error)
    // })
    //  console.log(creditCardToken);
    //  console.log('test');
    //   if (creditCardToken.error) {
    //     console.log('error');
    //     // Reset the state if Stripe responds with an error
    //     // Set submitted to false to let the user subscribe again
    //     this.setState({ submitted: false, error: STRIPE_ERROR });
    //     return;
    //   }
    // } catch (e) {
    //   console.log('error sending');
    //   // Reset the state if the request was sent with an error
    //   // Set submitted to false to let the user subscribe again
    //   this.setState({ submitted: false, error: STRIPE_ERROR });
    //   return;
    // }

    
    // Send a request to your server with the received credit card token
    // const { error } = await subscribeUser(creditCardToken);
    // // Handle any errors from your server
    // console.log('come 1');
    // if (error) {
    //   this.setState({ submitted: false, error: SERVER_ERROR });
    // } else {
    //   this.setState({ submitted: false, error: null });
    //   navigation.navigate('Home')
    // }
  };
  
  // render the subscription view component and pass the props to it
  render() {
    const { submitted, error } = this.state;
    return (
        <CardView
          error={error}
          submitted={submitted}
          onSubmit={this.onSubmit}
        />
    );
  }
}