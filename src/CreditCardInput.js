import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input';
import { baseUrl } from '../baseUrl/baseUrl';
import CardView from './CardView';
const STRIPE_ERROR = 'Payment service error. Try again later.';
const SERVER_ERROR = 'Server error. Try again later.';
import { AsyncStorage } from 'react-native';
var stripe = require('stripe-client')(
  'pk_test_51HsOxhKjg2M0AvhzaazkqWm4uWoU4BgE774nGFMtklCwIIr8EbiD6bzsynE8yzl1GfA9JQaoU0GfR0sPb8N8yaII00Ebudrewa'
);

const STRIPE_PUBLISHABLE_KEY =
  'pk_test_51HsOxhKjg2M0AvhzaazkqWm4uWoU4BgE774nGFMtklCwIIr8EbiD6bzsynE8yzl1GfA9JQaoU0GfR0sPb8N8yaII00Ebudrewa';
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
// const getCreditCardToken = (creditCardData) => {
//   console.log('coming here');
//   const card = {
//     'card[number]': creditCardData.values.number.replace(/ /g, ''),
//     'card[exp_month]': creditCardData.values.expiry.split('/')[0],
//     'card[exp_year]': creditCardData.values.expiry.split('/')[1],
//     'card[cvc]': creditCardData.values.cvc,
//   };
//   return fetch('https://api.stripe.com/v1/tokens', {
//     headers: {
//       // Use the correct MIME type for your server
//       Accept: 'application/json',
//       // Use the correct Content Type to send data to Stripe
//       'Content-Type': 'application/x-www-form-urlencoded',
//       // Use the Stripe publishable key as Bearer
//       Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`,
//     },
//     // Use a proper HTTP method
//     method: 'post',
//     // Format the credit card data to a string of key-value pairs
//     // divided by &
//     body: Object.keys(card)
//       .map((key) => key + '=' + card[key])
//       .join('&'),
//   }).then((response) => response.json());
//};
/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
const subscribeUser = (creditCardToken) => {
  console.log('come 12');
  console.log('check' + creditCardToken);
  return new Promise((resolve) => {
    console.log('Credit card token\n', creditCardToken);
    setTimeout(() => {
      resolve({ status: true });
    }, 1000);
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
      error: null,
    };
  }
  componentDidMount() {
    // this.endBooking();
  }
  // Handles submitting the payment request
  onSubmit = async (creditCardData) => {
    console.log(creditCardData.values);
    const { navigation } = this.props;
    const driver = this.props.route.params.driver;
    const RequestId = this.props.route.params.RequestId;
    const information = {
      card: {
        number: creditCardData.values.number.replace(/ /g, ''),
        exp_month: creditCardData.values.expiry.split('/')[0],
        exp_year: creditCardData.values.expiry.split('/')[1],
        cvc: creditCardData.values.cvc,
        name: creditCardData.values.name,
      },
    };

    const card = await stripe.createToken(information);

    const token = card.id;
    console.log(token);
    const bill = 3000;
    this.setState({ submitted: true });
    // Disable the Submit button after the request is sent

    fetch(baseUrl + 'api/customer/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: bill,
        source: token,
        card: information,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            // this.fetchData();
            ///this.props.navigation.navigate('login');
            console.log('success');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
    if (driver == 'driver') {
      this.fetchDriverData(RequestId);
    } else this.fetchData(RequestId);
  };
  fullPayment = async (bookingId) => {
    //-----------------------------------------------------------
    console.log('tri');
    const token = await AsyncStorage.getItem('Customertoken');
    fetch(baseUrl + 'api/customer/serviceDriverEnd/' + bookingId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('tri');
            console.log(data);
            this.props.navigation.goBack();
            // this.props.navigation.navigate('login');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  fetchDriverData = async (RequestId) => {
    console.log('coming here');
    const token = await AsyncStorage.getItem('Customertoken');
    const response = await fetch(
      baseUrl + 'api/customer/fetchDriverData/' + RequestId,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      }
    )
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log(data);

            const days = data.days;
            const sDate = data.startDate;
            const eDate = data.endDate;

            const driver_id = data.driver;
            console.log(days);
            console.log(sDate);
            console.log(eDate);
            this.startDriverBooking(days, sDate, eDate, driver_id);
            //this.endBooking();
            // if (lang == 'true') {
            //   this.setState({ check: true });
            // }
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  fetchData = async (RequestId) => {
    console.log('coming here');
    const token = await AsyncStorage.getItem('Customertoken');
    const response = await fetch(
      baseUrl + 'api/customer/fetchData/' + RequestId,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      }
    )
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log(data);
            // var d = data.map(function (item) {
            //   return item['days'];
            // });
            // var s = data.map(function (item) {
            //   return item['startDate'];
            // });
            // var e = data.map(function (item) {
            //   return item['endDate'];
            // });
            // var v = data.map(function (item) {
            //   return item['vehicle'];
            // });
            const days = data.days;
            const sDate = data.startDate;
            const eDate = data.endDate;
            const vehicle_id = data.vehicle;
            console.log(days);
            console.log(sDate);
            console.log(eDate);
            console.log(vehicle_id);
            this.startBooking(days, sDate, eDate, vehicle_id);
            // if (lang == 'true') {
            //   this.setState({ check: true });
            // }
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };

  startBooking = async (days, sD, eD, vehicle_id) => {
    console.log('sart booking');
    const token = await AsyncStorage.getItem('Customertoken');
    const response = await fetch(baseUrl + 'api/customer/book/' + vehicle_id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        days: days,
        startDate: sD,
        endDate: eD,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log(data);
            const Id = data;
            this.props.navigation.navigate('EndVehicleBooking', {
              bookingId: Id,
            });
            // if (lang == 'true') {
            //   this.setState({ check: true });
            // }
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  startDriverBooking = async (days, sD, eD, driver_id) => {
    console.log('sart booking');
    const token = await AsyncStorage.getItem('Customertoken');
    const response = await fetch(baseUrl + 'api/customer/Dbook/' + driver_id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        days: days,
        startDate: sD,
        endDate: eD,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log(data);

            //  const booking_id = data.id;
            this.props.navigation.navigate('EndDriverBooking', {
              booking_id: data,
            });
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  // render the subscription view component and pass the props to it
  render() {
    const { submitted, error } = this.state;
    return (
      <CardView error={error} submitted={submitted} onSubmit={this.onSubmit} />
    );
  }
}
