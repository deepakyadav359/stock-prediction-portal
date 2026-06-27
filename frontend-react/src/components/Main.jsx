import React from 'react'
import Header from './Header'
import Button from './Button'
import Footer from './Footer'

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>This stock prediction application utilizees machine learning techniques, specifically employing Keras, and LSTM model, integrated within the django framework.It forecasts future stock prices by analyzing 100-days and 200- days moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
            <Button text="Explore Now" class="btn-info" url="/dashboard" />
            
        </div>
      </div>
    </>
  )
}

export default Main