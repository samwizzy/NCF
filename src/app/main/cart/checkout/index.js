import React, { useState } from 'react';
import HomeSlider from './../components/slider/Slider';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import CheckoutForm from './forms/CheckoutForm';
import CartDetails from './forms/CartDetails';
import LoginDialog from '../../auth/LoginDialog';

function Checkout(props) {
  const [step, setStep] = useState(0);
  const steps = ['Billing Details', 'Details', 'Payment'];

  const nextStep = () => {
    if (step >= 0 && step < steps.length) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 0 && step <= steps.length) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div>
      <HomeSlider />
      <div className='max-w-7xl mx-auto md:px-8 px-4 py-8 bg-white'>
        <div className='flex items-center mb-8'>
          <button
            onClick={prevStep}
            className='flex justify-center h-10 w-10 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold py-2 px-4 rounded-full'
          >
            <HiOutlineChevronLeft size='24' className='flex-shrink-0' />
          </button>
          <h2 className='text-gray-700 font-medium text-xl ml-2'>Back</h2>
        </div>

        <div className='py-0'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div>
              {step === 0 && (
                <CheckoutForm nextStep={nextStep} prevStep={prevStep} />
              )}
              {step === 1 && (
                <CartDetails nextStep={nextStep} prevStep={prevStep} />
              )}
              {step === 2 && (
                <CheckoutForm nextStep={nextStep} prevStep={prevStep} />
              )}
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <LoginDialog />
    </div>
  );
}

export default Checkout;
