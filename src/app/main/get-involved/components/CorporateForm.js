import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { HiOutlineChevronDown, HiLockClosed } from 'react-icons/hi';

function CorporateForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mb-8'>
      <div className='shadow overflow-hidden sm:rounded-md'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid grid-cols-6 gap-y-3 gap-x-6 mb-8'>
            <div className='col-span-6 sm:col-span-6'>
              <h2 className='text-lg font-bold text-black uppercase mb-4'>
                General Information
              </h2>
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                name='company_name'
                id='company-name'
                {...register('full_name', { required: true })}
                placeholder='Company name'
                autoComplete='company-name'
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
                {...register('ownership_type', { required: true })}
                placeholder='Type of ownership'
                id='ownership-type'
                autoComplete='ownership-type'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.company_name && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='date'
                {...register('regDate', { required: true })}
                placeholder='Company Registered Date'
                id='reg-date'
                autoComplete='reg-date'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.regDate && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('head_office', { required: true })}
                placeholder='(Head) Office Address'
                id='head-office'
                autoComplete='head-office'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.head_office && (
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

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('manager_director', {
                  required: true,
                })}
                placeholder='Manager director'
                id='manager-director'
                autoComplete='manager-director'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.manager_director && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('staff_strength', { required: true })}
                placeholder='Staff Strength'
                id='staff-strength'
                autoComplete='staff-strength'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.staff_strength && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className='grid grid-cols-6 gap-y-3 gap-x-6'>
            <div className='col-span-6 sm:col-span-6'>
              <div className='mb-4'>
                <h2 className='text-lg font-bold text-black uppercase'>
                  Contact Information
                </h2>
                <span className='text-sm text-gray-600'>
                  This section gathers information about the contact persons for
                  your organization. All correspondences between the NCF and
                  your organization will be addressed to the persons specified
                  below.
                </span>
              </div>
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                name='contact_person'
                id='contact-person-name'
                {...register('contact_person', { required: true })}
                placeholder="Contact Person's Name"
                autoComplete='contact-person-name'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.contact_person && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('contact_person_email', {
                  required: true,
                })}
                placeholder="Contact Person's Email"
                id='contact-person-email'
                autoComplete='contact-person-email'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.contact_person_email && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('contact_person_designation', {
                  required: true,
                })}
                placeholder="Contact Person's Designation"
                id='contact-person-designation'
                autoComplete='contact-person-designation'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.contact_person_designation && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                {...register('contact_person_telephone', {
                  required: true,
                })}
                placeholder="Contact Person's Telephone"
                id='contact-person-telephone'
                autoComplete='contact-person-telephone'
                className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
              />
              {errors.contact_person_telephone && (
                <span className='text-xs text-red-500'>
                  This field is required
                </span>
              )}
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <div className='relative'>
                <select
                  id='contact-person-gender'
                  {...register('contact_person_gender', {
                    required: true,
                  })}
                  placeholder="Contact Person's Gender"
                  autoComplete='contact-person-gender'
                  className='block appearance-none w-full py-2 px-2 pr-8 border border-gray-300 bg-white rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 sm:text-sm'
                >
                  <option value='Lagos'>Male</option>
                  <option value='Abuja'>Female</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <HiOutlineChevronDown />
                </div>
              </div>
              {errors.contact_person_gender && (
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

export default CorporateForm;
