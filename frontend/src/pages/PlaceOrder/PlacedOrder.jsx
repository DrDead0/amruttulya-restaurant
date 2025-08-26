import React from 'react'
import './PlacedOrder.css'
import { assets } from '../../assets/assets'

const PlacedOrder = () => {
  return (
    <div className='placed-order'>
      <div className='order-success'>
        <img src={assets.parcel_icon} alt='parcel' className='parcel-icon' />
        <h1>Order Placed Successfully!</h1>
        <p>Your order has been confirmed and is being prepared. You will receive a confirmation email shortly.</p>
        <div className='order-details'>
          <h3>Order Details</h3>
          <p>Order ID: #12345</p>
          <p>Estimated Delivery: 30-45 minutes</p>
          <p>Total Amount: $45.99</p>
        </div>
        <button className='track-order-btn'>Track Order</button>
        <button className='back-home-btn'>Back to Home</button>
      </div>
    </div>
  )
}

export default PlacedOrder

