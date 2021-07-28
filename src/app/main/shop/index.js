import React from 'react'
import HomeSlider from "./components/slider/Slider"
import { Rating } from "@material-ui/lab"
import {HiOutlineSearch, HiViewGrid} from "react-icons/hi"
import {MdStarBorder} from "react-icons/md"
import _ from 'lodash'
import ShopSideMenu from './components/ShopSideMenu'

function Shop() {
    return (
        <div>
            <HomeSlider />
            <div className="w-full md:px-8 px-4 py-8 bg-gray-100">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-x-0">
                    <div className="md:col-span-2 col-span-12"></div>
                    <div className="md:col-span-10 col-span-12">
                        <div className="mt-0 flex rounded-md shadow-sm w-96">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                <HiOutlineSearch />
                            </span>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                autoComplete="given-name"
                                placeholder="Search"
                                className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-light focus:ring-opacity-50 p-2 flex-1 block rounded-none rounded-r-md sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:px-8 px-4 py-2 shadow-sm">
                <div className="grid md:grid-cols-12 gap-x-2 items-center">
                    <div className="col-span-2">
                        <h4 className="text-sm font-bold">Product Category</h4>
                    </div>
                    <div className="flex justify-between items-center col-span-10">
                        <h4 className="text-sm font-medium">Showing 9 of 9 products</h4>
                        <div className="flex items-center space-x-2">
                            <button className=""><HiViewGrid size="32" className="text-gray-300" /></button>
                            <button className=""><HiViewGrid size="32" className="text-green" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:px-0">
                <div className="grid md:grid-cols-12 md:gap-x-0 gap-y-2">
                    <aside className="md:col-span-2 col-span-12 min-h-screen py-4 border-0 border-r border-solid border-gray-200">
                        <ShopSideMenu />
                    </aside>
                    <div className="md:col-span-10 col-span-12 p-4">
                        <div className="text-right mb-2">
                            <span className="text-sm">
                                Sort by: Default
                            </span>
                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-8 gap-y-8">
                            {_.range(0, 8).map(i =>
                            <div className="max-w-md rounded overflow-hidden h-full shadow-lg">
                                <img className="w-full" src="http://bulma.io/images/placeholders/1280x960.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-sm mb-2">Birding Binocular</div>
                                    <p className="text-gray-700 text-sm mb-2">₦ 131,250</p>
                                    <p className="text-gray-400 text-sm line-through mb-4">₦ 157,500</p>
                                        
                                    <Rating
                                        name="customized-empty"
                                        size="small"
                                        defaultValue={2}
                                        precision={0.5}
                                        emptyIcon={<MdStarBorder fontSize="inherit" />}
                                    />
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop
