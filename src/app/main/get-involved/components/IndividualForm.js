import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { HiOutlineChevronDown, HiLockClosed } from 'react-icons/hi';
import PassportDropzone from './Dropzone';

function IndividualForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='shadow overflow-hidden sm:rounded-md'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid grid-cols-6 gap-y-3 gap-x-6'>
            <div className='col-span-6 sm:col-span-6'>
              <h2 className='text-lg font-bold text-black uppercase mb-4'>
                General Information
              </h2>
            </div>
            <div className='col-span-6 sm:col-span-6 mb-4'>
              <h3 className='text-sm text-gray-600 tracking-tight mb-2'>
                Passport
              </h3>
              <PassportDropzone />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                name='full_name'
                id='full-name'
                {...register('full_name', { required: true })}
                placeholder='Full name'
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
                {...register('other_name', { required: true })}
                placeholder='Other Name (optional)'
                id='other-name'
                autoComplete='other-name'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.other_name && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <div className='w-full block relative'>
                <select
                  id='gender'
                  {...register('gender', { required: true })}
                  placeholder='Gender'
                  autoComplete='gender'
                  className='block appearance-none w-full py-2 px-2 pr-8 border border-gray-300 bg-white leading-tight rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 sm:text-sm'
                >
                  <option value='MALE'>Male</option>
                  <option value='FEMALE'>Female</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <HiOutlineChevronDown />
                </div>
              </div>
              {errors.gender && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <div className='w-full block relative'>
                <select
                  id='marital-status'
                  {...register('marital_status', { required: true })}
                  placeholder='Marital status'
                  autoComplete='marital-status'
                  className='block appearance-none w-full py-2 px-2 pr-8 border border-gray-300 bg-white leading-tight rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 sm:text-sm'
                >
                  <option value='MALE'>Single</option>
                  <option value='FEMALE'>Married</option>
                  <option value='FEMALE'>Divorced</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <HiOutlineChevronDown />
                </div>
              </div>
              {errors.marital_status && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='date'
                {...register('dob', { required: true })}
                placeholder='Company Registered Date'
                id='date-of-birth'
                autoComplete='date-of-birth'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.dob && (
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
                  <HiOutlineChevronDown />
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
                  <HiOutlineChevronDown />
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
                {...register('state_of_origin', { required: true })}
                placeholder='state_of_origin'
                id='state-of-origin'
                autoComplete='state-of-origin'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.state_of_origin && (
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
                id='phone-number'
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

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('occupation', { required: true })}
                placeholder='Occupation/Profession'
                id='occupation'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.occupation && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('institution', { required: true })}
                placeholder='Institution'
                id='institution'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.institution && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('previous_membership_number', { required: true })}
                placeholder='Previous membership number'
                id='previous_membership_number'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.previous_membership_number && (
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
                        Please confirm that the information provided on this
                        form is true and accurate.
                      </label>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex items-center h-5'>
                      <HiLockClosed fontSize='large' color='#666' />
                    </div>
                    <div className='ml-3 text-sm mt-0.5'>
                      <label
                        htmlFor='shipping-address'
                        className='font-medium text-gray-700'
                      >
                        DATA PROTECTION: The personal information provided by
                        you will be held on our database and will not be shared
                        with any third party..
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className='flex justify-center space-x-12 px-4 py-3 bg-gray-50 text-right sm:px-6 mt-12'>
            <button
              type='submit'
              disabled={!isDirty || (isDirty && !isValid)}
              className={clsx(
                !isDirty || (isDirty && !isValid)
                  ? 'bg-gray-200 hover:bg-gray-200'
                  : 'bg-green hover:bg-green-800',
                'inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green'
              )}
            >
              Submit
            </button>
            <button className='inline-flex justify-center py-2 px-12 border border-transparent shadow-sm bg-white border-gray-300 text-sm font-medium rounded-sm text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green'>
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default IndividualForm;
