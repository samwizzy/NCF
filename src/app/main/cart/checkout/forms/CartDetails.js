import React from 'react';

function CartDetails() {
  return (
    <div className='w-full'>
      <div>
        <h2 className='text-gray-800 font-bold text-xl mb-4'>Details</h2>
      </div>

      <div className=''>
        <div className='max-w-lg rounded overflow-hidden shadow-md mb-8'>
          <div className='mb-2 border-b py-2 px-4'>
            <span className='font-medium text-sm'>Shipment Details</span>
          </div>
          <div className='p-4'>
            <p className='text-gray-500 text-sm font-bold mb-2'>
              Shipment 1 of 1{' '}
            </p>
            <p className='text-gray-500 text-sm mb-4'>
              Birding Binocular; Olympus 8×42 pro Binocular with Extra-low
              dispersion (ED) glass.
            </p>

            <p className='text-gray-500 text-sm'>
              Delivered between{' '}
              <strong className='text-gray-800'>Friday 30 Apr</strong> and{' '}
              <strong className='text-gray-800'>Tuesday 4 May</strong>
            </p>
          </div>
        </div>

        <div className='max-w-lg rounded overflow-hidden shadow-md mb-8'>
          <div className='flex justify-between font-medium text-sm mb-2 border-b py-2 px-4'>
            <span>Address</span>
          </div>
          <div className='p-4'>
            <p className='text-gray-600 text-sm font-bold mb-2'>Victor Jones</p>
            <p className='flex justify-between mb-6'>
              <span className='text-gray-700 text-xs'>
                808 Mandilas Mall, Marina, victorial island Lagos Nigeria.
              </span>
              <span className='text-green text-xs'>Change Address</span>
            </p>
          </div>
        </div>

        <div className='max-w-lg rounded overflow-hidden shadow-md'>
          <table className='min-w-full divide-y divide-gray-200'>
            <tbody className='bg-white divide-y divide-gray-200'>
              <tr className=''>
                <td className='px-4 py-3 whitespace-nowrap'>
                  <span className='text-sm font-medium text-gray-600'>
                    Sub Total
                  </span>
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500'>
                  ₦ 131,250
                </td>
              </tr>
              <tr className=''>
                <td className='px-4 py-3 whitespace-nowrap'>
                  <span className='text-sm font-medium text-gray-600'>
                    Shipping Fee
                  </span>
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500'>
                  ₦ 131,250
                </td>
              </tr>
              <tr className=''>
                <td className='px-4 py-3 whitespace-nowrap'>
                  <span className='text-sm font-medium text-gray-600'>
                    Total
                  </span>
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-right'>
                  <div className='flex flex-col text-right'>
                    <span className='text-gray-800 text-sm font-bold'>
                      ₦132,750.00
                    </span>
                    <span className='text-xs text-gray-500'>
                      (includes ₦6,250.00 Tax estimated for Nigeria)
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='max-w-lg flex justify-center space-x-4 mt-12'>
          <button className='bg-green border hover:bg-green-800 text-sm text-white font-medium py-2 px-12 rounded-sm'>
            Pay now
          </button>
          <button className='bg-gray-50 border hover:bg-gray-100 text-sm text-gray-800 font-medium py-2 px-12 rounded-sm'>
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
