import React from 'react'
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import { HiOutlinePhone } from "react-icons/hi"
import { InnerFooter } from "./styles"

function AppFooter() {
    return (
        <div className="w-full bg-green-dark text-gray-300 text-sm">
            <InnerFooter>
            <div className="max-w-7xl mx-auto py-16 md:px-0 px-8">
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-y-8">
                    <div className="block">
                        <h2 className="text-base font-medium text-white mb-3">
                            ABOUT US
                        </h2>
                        <p className="">
                            The Nigerian Conservation Foundation (NCF) is the premier Non Governmental Organisation (NGO) dedicated to nature conservation and sustainable development in Nigeria.
                        </p>
                        <h2 className="text-base font-medium text-white my-4">
                            NCF PARTNERS
                        </h2>
                        <ul className="flex space-x-2">
                            <li><img className="w-16" src="/assets/images/partners/birdlife.svg" alt="" /></li>
                            <li><img className="w-16" src="/assets/images/partners/wwf.svg" alt="" /></li>
                            <li><img className="w-16" src="/assets/images/partners/iucn.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div className="block">
                        <h2 className="text-base font-medium text-white mb-3">
                            OUR WORK
                        </h2>
                        <aside className="">
                            <ul className="">
                                <li><a className="text-gray-300 hover:text-white" href="/">Climate Change</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Species Conservation</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Policy & Advocacy</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Environmental Education</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Marine Coastal & Wetland</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Forest</a></li>
                            </ul>
                        </aside>
                        <h2 className="text-base font-medium text-white my-4">
                            FOLLOW US ON
                        </h2>
                        <div className="flex items-center justify-start space-x-4">
                            <a href="/" className="text-gray-100 hover:text-white"><FaFacebookSquare /></a>
                            <a href="/" className="text-gray-100 hover:text-white"><FaTwitter /></a>
                            <a href="/" className="text-gray-100 hover:text-white"><FaYoutube /></a>
                            <a href="/" className="text-gray-100 hover:text-white"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="block">
                        <h2 className="text-base font-medium text-white mb-3">
                            GET INVOLVED
                        </h2>
                        <aside className="">
                            <ul className="">
                                <li><a className="text-gray-300 hover:text-white" href="/">Membership</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Donate</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Sponsorship</a></li>
                                <li><a className="text-gray-300 hover:text-white" href="/">Volunteer</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="block">
                        <h2 className="text-base font-medium text-white mb-3">
                            SIGN UP FOR NEWSLETTER
                        </h2>
                        <p>Get latest information on our events, programmes and special membership offers.</p>
                        <div class="my-2 flex">
                            <input className="border-green-300 p-3 focus:outline-none focus:ring-1 focus:ring-green-light focus:ring-opacity-50 flex-1 block w-full" type="text" placeholder="Enter your email address" />
                            <button className="inline-flex items-center px-4 border border-l-0 border-green-light bg-green text-white text-sm"><FaEnvelope color="#fff" /></button>
                        </div>

                        <h2 className="text-base font-medium text-white my-4">
                            STAY IN TOUCH
                        </h2>
                        <aside className="">
                            <dl className="space-y-1">
                                <div className="flex items-start space-x-2">
                                    <dt className="mt-1"><ImLocation className="text-gray-100 flex-none w-5 h-full" /> </dt>
                                    <dd><span>NCF Headquarters, Km 19, Lekki-Epe Expressway, Lekki. Lagos. Nigeria</span></dd>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <dt className="sm:mt-0 mt-0"><HiOutlinePhone className="text-gray-100 flex-none w-5 h-full" /> </dt>
                                    <dd><span>+234 906 546 0479  +234 812 755 6291</span></dd>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <dt className="mt-0"><FaEnvelope className="text-gray-100 flex-none w-5 h-full" /></dt>
                                    <dd><span>info@ncfnigeria.org</span></dd>
                                </div>
                            </dl>
                        </aside>
                    </div>
                </div>

                <div class="content text-sm mt-4">
                    <p>© 2020 Nigerian Conservation Foundation. All Right Reserved</p>
                </div>
            </div>
            </InnerFooter>
        </div>
    )
}

export default AppFooter
