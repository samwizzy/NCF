/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiX } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

export default function Example() {
  const [open, setOpen] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => console.log(data);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto shadow-sm'
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg leading-6 font-medium text-gray-900'
                  >
                    <div className='sm:flex sm:justify-between mb-16'>
                      <h2 className='tracking-wider text-gray-800 font-bold'>
                        Login
                      </h2>
                      <HiX />
                    </div>
                  </Dialog.Title>
                  <div className='mt-2'>
                    <h2 className='text-sm font-bold text-gray-800 my-4'>
                      If you have shopped with us before, please enter your
                      details below. If you are a new customer, please proceed
                      to the Billing section.
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='mb-8'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          {...register('email', { required: true })}
                          placeholder='Email Address'
                          autoComplete='email'
                          className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                        />
                        {errors.email && (
                          <span className='text-xs text-red-500'>
                            This field is required
                          </span>
                        )}
                      </div>

                      <div className='mb-8'>
                        <input
                          type='password'
                          name='password'
                          id='password'
                          {...register('password', { required: true })}
                          placeholder='Password'
                          autoComplete='password'
                          className='py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 block w-full shadow-sm sm:text-sm border border-solid border-gray-300 rounded-sm'
                        />
                        {errors.password && (
                          <span className='text-xs text-red-500'>
                            This field is required
                          </span>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  type='submit'
                  disabled={!isDirty || (isDirty && !isValid)}
                  className={clsx(
                    !isDirty || (isDirty && !isValid)
                      ? 'bg-gray-200 hover:bg-gray-200'
                      : 'bg-green hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
                    'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm'
                  )}
                  onClick={() => setOpen(false)}
                >
                  Login
                </button>
                <button
                  type='button'
                  className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
