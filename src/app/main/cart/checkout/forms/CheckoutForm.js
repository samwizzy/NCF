import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

function CheckoutForm(props) {
  const { nextStep } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  console.log(errors, 'errors');
  console.log(isValid, 'isValid');
  console.log(isDirty, 'isDirty');

  return (
    <div className='w-full'>
      <div className='mb-8'>
        <h2 className='text-gray-800 font-bold text-xl mb-4'>Checkout</h2>
        <p className='text-sm'>
          Returning Customer?{' '}
          <span className='text-green-light'>click here to login</span>
        </p>
      </div>

      <div>
        <h2 className='text-gray-800 font-bold text-xl mb-4'>
          Billing Details
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='shadow overflow-hidden sm:rounded-md'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className='grid grid-cols-6 gap-y-3 gap-x-6'>
              <div className='col-span-6 sm:col-span-3'>
                <input
                  type='text'
                  name='full_name'
                  id='full-name'
                  {...register('full_name', { required: true })}
                  placeholder='Fullname'
                  autoComplete='given-name'
                  className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                />
                {errors.full_name && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <input
                  type='text'
                  {...register('company_name', { required: true })}
                  placeholder='Company Name (optional)'
                  id='company-name'
                  autoComplete='company-name'
                  className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                />
                {errors.company_name && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <div className='w-full block relative'>
                  <select
                    id='country'
                    {...register('country', { required: true })}
                    placeholder='Country'
                    autoComplete='country'
                    className='block appearance-none w-full py-2 px-2 pr-8 border border-gray-300 bg-white leading-tight rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 sm:text-sm'
                  >
                    <option value='United States'>United States</option>
                    <option value='Canada'>Canada</option>
                    <option value='Mexico'>Mexico</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
                {errors.country && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <input
                  type='text'
                  {...register('address', { required: true })}
                  placeholder='Address'
                  id='street-address'
                  autoComplete='street-address'
                  className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                />
                {errors.address && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <div className='relative'>
                  <select
                    id='state'
                    {...register('state', { required: true })}
                    placeholder='State'
                    autoComplete='state'
                    className='block appearance-none w-full py-2 px-2 pr-8 border border-gray-300 bg-white rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 sm:text-sm'
                  >
                    <option value='Lagos'>Lagos</option>
                    <option value='Abuja'>Abuja</option>
                    <option value='Delta'>Delta</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
                {errors.state && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <input
                  type='text'
                  {...register('city', { required: true })}
                  placeholder='City'
                  id='city'
                  className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                />
                {errors.city && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <input
                  type='text'
                  {...register('phone_number', { required: true })}
                  placeholder='Phone number'
                  id='phone_number'
                  className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                />
                {errors.phone_number && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <input
                  type='text'
                  {...register('email_address', { required: true })}
                  placeholder='Email address'
                  id='email-address'
                  autoComplete='email'
                  className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                />
                {errors.email_address && (
                  <span className='text-xs text-red-500'>
                    This field is required
                  </span>
                )}
              </div>

              <div className='col-span-4'>
                <fieldset>
                  <div className='mt-4 space-y-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center h-5'>
                        <input
                          id='new-account'
                          {...register('new_account')}
                          type='checkbox'
                          className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                        />
                      </div>
                      <div className='ml-3 text-sm mt-0.5'>
                        <label
                          htmlFor='new-account'
                          className='font-medium text-gray-700'
                        >
                          Create an Account
                        </label>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <div className='flex items-center h-5'>
                        <input
                          id='shipping-address'
                          {...register('shipping_address')}
                          type='checkbox'
                          className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                        />
                      </div>
                      <div className='ml-3 text-sm mt-0.5'>
                        <label
                          htmlFor='shipping-address'
                          className='font-medium text-gray-700'
                        >
                          Ship to a different Address?
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className='col-span-4'>
                <div className='mt-4'>
                  <textarea
                    id='order-notes'
                    {...register('order_notes')}
                    rows={3}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3 block w-full sm:text-sm border border-gray-300 rounded-sm'
                    placeholder='Order notes'
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
            <button
              type='submit'
              disabled={!isDirty || (isDirty && !isValid)}
              className={clsx(
                !isDirty || (isDirty && !isValid)
                  ? 'bg-gray-200 hover:bg-gray-200'
                  : 'bg-green hover:bg-green-800',
                'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green'
              )}
            >
              Checkout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
