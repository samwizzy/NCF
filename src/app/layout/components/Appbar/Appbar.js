import { Fragment } from 'react'
import { Link } from "react-router-dom"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HiMenu, HiX, HiOutlineChevronDown } from "react-icons/hi"
import navigation from "./menu.json"
import "./appbar.css"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Appbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 md:bg-opacity-80 bg-opacity-100">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">

										{navigation.map((nav, i) => 
										(nav.sublist && nav.sublist.length > 0) ?
										<div className="group inline-block">
											<button className="outline-none focus:outline-none text-gray-300 hover:text-white px-3 py-2 rounded-sm flex items-center">
												<span className="pr-1 text-sm font-medium flex-1">{nav.name}</span>
												<span>
													<HiOutlineChevronDown className="h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" />
												</span>
											</button>
											<ul
												className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
											transition duration-150 ease-in-out origin-top min-w-32"
											>
												{nav.sublist.map(list => 
													list.sublist ? (
														<li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
															<button className="w-full text-left flex items-center outline-none focus:outline-none">
																<span className="pr-1 flex-1">{list.name}</span>
																<span className="mr-auto">
																	<HiOutlineChevronDown className="h-4 w-4 transition duration-150 ease-in-out" />
																</span>
															</button>
															{list.sublist &&
															<ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
																{list.sublist.map(next => 
																	next.sublist ?
																	<li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
																		<button className="w-full text-left flex items-center outline-none focus:outline-none">
																			<span className="pr-1 flex-1">{next.name}</span>
																			<span className="mr-auto">
																				<HiOutlineChevronDown className="h-4 w-4 transition duration-150 ease-in-out" />
																			</span>
																		</button>
																		{next.sublist &&
																			<ul
																				className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
																				{next.sublist.map(sub3 => 
																					<li className="px-3 py-1 hover:bg-gray-100">{sub3.name}</li>
																				)}	
																			</ul>
																		}
																	</li>
																	:
																	<li className="px-3 py-1 hover:bg-gray-100">{next.name}</li>
																)}
															</ul>
															}
														</li>
													)
													: 
													<li className="rounded-sm px-3 py-1 hover:bg-gray-100">
														<button component={Link} to="/about-us" className="w-full text-left flex items-center outline-none focus:outline-none">
															<span className="pr-1 flex-1">{list.name}</span>
														</button>
													</li>
												)}	
											</ul>
										</div>
										:
										<a
											key={nav.name}
											href={nav.href}
											className={classNames(
												nav.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white',
												'px-3 py-2 rounded-md text-sm font-medium'
											)}
											aria-current={nav.current ? 'page' : undefined}
										>
											{nav.name}
										</a>
										)}
										
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button component={Link} to="/about-us" className="rounded-full bg-white py-2 px-4 flex items-center outline-none focus:outline-none">
									<span className="flex-1 text-xs font-bold">LEKKI CENTER</span>
								</button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block my-0 px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block my-0 px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block my-0 px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Appbar