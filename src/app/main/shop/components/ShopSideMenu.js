import React from 'react'
import { Rating } from "@material-ui/lab"
import { HiOutlineChevronDown } from "react-icons/hi"
import {MdStarBorder} from "react-icons/md"

function ShopSideMenu() {
    return (
        <nav>
            <div className="">
                <button className="w-full text-left flex px-4 py-2 items-center outline-none focus:outline-none">
                    <span className="pr-1 text-xs text-gray-500 font-bold uppercase flex-1">CATEGORIES</span>
                    <span className="mr-auto">
                        <HiOutlineChevronDown className="h-4 w-4 transition transform hover:rotate-180 duration-150 ease-in-out" />
                    </span>
                </button>
                <div className="pl-4">
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">BNR</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">Books & Publications</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">Clothing</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">FNP</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">Gadgets</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">Gift Items</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">Kids</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">LCC</a>
                    <a className="block text-sm font-medium text-gray-600 my-0 px-4 py-2" href="/">Souvenirs</a>
                </div>
            </div>
            <div>
                <h3 className="text-left text-gray-500 text-xs font-bold uppercase px-4 py-2 mt-2">
                    PRODUCT RATING
                </h3>
                <div className="mt-4 px-4 space-y-4">
                    <div className="flex items-center">
                        <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <Rating
                            name="customized-empty"
                            className="ml-2"
                            defaultValue={2}
                            precision={0.5}
                            emptyIcon={<MdStarBorder fontSize="inherit" />}
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <Rating
                            name="customized-empty"
                            className="ml-2"
                            defaultValue={2}
                            precision={0.5}
                            emptyIcon={<MdStarBorder fontSize="inherit" />}
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <Rating
                            name="customized-empty"
                            className="ml-2"
                            defaultValue={2}
                            precision={0.5}
                            emptyIcon={<MdStarBorder fontSize="inherit" />}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ShopSideMenu
