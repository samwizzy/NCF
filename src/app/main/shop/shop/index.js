import React from 'react'
import ShopSlider from "./../components/slider/Slider"
import { Rating } from "@material-ui/lab"
import { HiOutlineChevronLeft, HiOutlineShoppingCart } from "react-icons/hi"
import {MdStarBorder} from "react-icons/md"
import ShopSideMenu from "../components/ShopSideMenu"
import ThumbnailSlider from "./components/ThumbnailSlider"

function ShopDetails() {
    return (
        <div>
            <ShopSlider />
            <div className="w-full md:px-8 px-4 py-8 bg-gray-100">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-x-0">
                    <div className="md:col-span-2 col-span-12">
                        <p className="text-base flex text-gray-600">
                            <HiOutlineChevronLeft className="mr-2" /> 
                            <span>Back</span>
                        </p>
                    </div>
                    <div className="md:col-span-10 col-span-12"></div>
                </div>
            </div>

            <div className="w-full md:px-0">
                <div className="grid md:grid-cols-12 md:gap-x-0 gap-y-2">
                    <aside className="md:col-span-2 col-span-12 min-h-screen py-4 border-0 border-r border-solid border-gray-200">
                        <ShopSideMenu />
                    </aside>
                    <div className="md:col-span-10 col-span-12 p-4">
                        <div className="grid md:grid-cols-1 grid-cols-1 md:gap-x-8 gap-y-8">
                            <div className="max-w-md w-full lg:max-w-full lg:flex h-full shadow-md">
                                <div className="">
                                    <img src="/assets/images/products/binocular.png" alt="" />
                                </div>
                                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">Birding Binocular</div>
                                        <div className="text-gray-600 text-sm mb-2">Olympus 8×42 pro Binocular with Extra-low dispersion (ED) glass.</div>
                                        <Rating 
                                            name="customized-empty"
                                            className="mb-2"
                                            defaultValue={2}
                                            precision={0.5}
                                            size="smalls"
                                            emptyIcon={<MdStarBorder fontSize="inherit" />}
                                        />

                                        <p className="text-gray-800 font-bold text-sm mb-2">₦ 131,250 Inc. VAT</p>
                                        <p className="text-gray-400 text-sm line-through mb-4">₦ 157,500</p>
                                        <p className="text-gray-800 italic text-sm mb-4">2 in stock</p>
                                    </div>

                                    <button className="bg-green flex items-center justify-center hover:bg-green-800 text-white font-bold py-2 px-6 mt-6">
                                        <HiOutlineShoppingCart size="24" className="mr-2" /> 
                                        <span className="flex">Add to Cart</span>
                                    </button>

                                    <div><ThumbnailSlider /></div>

                                    <div className="flex items-center">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopDetails
