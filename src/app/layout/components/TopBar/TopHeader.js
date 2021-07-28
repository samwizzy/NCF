import React from 'react';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

function TopHeader() {
	return (
        <nav className="w-full bg-black text-white py-2 px-2 sm:px-6 lg:px-4" role="navigation" aria-label="main navigation">
            <div className="max-w-7xl mx-auto">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-300">For nature....For people.....For Nigeria</p>
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="flex space-x-4">
                            <a href="/" className="">
                                <FaFacebookSquare />
                            </a>

                            <a href="/" className="">
                                <FaTwitter />
                            </a>

                            <a href="/" className="">
                                <FaYoutube />
                            </a>

                            <a href="/" className="">
                                <FaInstagram />
                            </a>
                        </div>

                        <div className="">
                            <span className="text-sm text-gray-300">
                                <strong>
                                    Call: 234 812 755 6291
                                </strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
	)
}

export default TopHeader