import React from 'react'
import {ImLocation} from "react-icons/im"
import data from "./data/mock.json"
import HomeSlider from "./components/slider/Slider"

function OurWork() {
    return (
        <div>
            <HomeSlider />
            <div className="w-full bg-gray-100 pt-16">
                <div className="max-w-7xl mx-auto pt-16 md:px-0 px-8">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8">
                        <div className="block">
                            <h1 className="text-3xl font-bold text-green mb-6">MARINE & COASTLINE</h1>
                            <p className="text-base">
                                These comprises our activities in other habitats apart from the forest. We are working to raise awareness on the importance of these ecosystems. Equally, we are building strong advocacy in order to see effective government policies toward the protection of the marine, coastal ecosystems.
                            </p>
                        </div>
                        <div className="border">
                            <img src="/assets/images/nature/whale-shark.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white">
                <div className="max-w-7xl mx-auto py-16 md:px-0 px-8">
                    <div className="text-left mb-6">
                        <h1 className="font-bold text-2xl text-green">MARINE</h1>
                        <hr className="h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300" />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8">
                        <div className="mt-6">
                            <p className="is-size-6 font-base">
                                This is our initiative inaugurated to protect Nigeria’s marine ecosystem.
                                Though, with abundant biodiversity resources, this ecosystem has neither been 
                                systematically studied nor documented.
                                The programme seek to achieve the following:
                            </p>
                           
                            <ul class="w-full rounded-lg mt-2 mb-3 text-gray-800">
                                {data.goals.map((project, i) => 
                                    <li key={i} className="flex items-center p-1 pl-3">
                                        <ImLocation size={14} className="text-green mr-2 flex-none transform -rotate-90 h-full" />
                                        <span>{project.title}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="">
                            <img src="/assets/images/nature/marine.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-100 pt-8 pb-8">
                <div className="max-w-7xl mx-auto pt-16 md:px-0 px-8">
                    <div className="text-right mb-4">
                        <h1 className="font-bold text-2xl text-green">COASTAL</h1>
                        <hr className="h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-300" />
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center">
                        <div className="">
                            <img src="/assets/images/nature/coastal.png" alt="" />
                        </div>
                        <div>
                            <p>
                                Nigeria has about 853km of coastline which offers flood protection for coastal communities. The coastline equally serve migratory water birds (as resting points during migratory flights) and seas turtles (hatching sites).
                                Consequently, the coastal communities have become important part of our campaign and advocacy. Some of our activities are:
                            </p>
                            
                            <ul class="w-full rounded-lg mt-2 mb-3 text-gray-800">
                                <li className="flex items-start p-1 pl-3">
                                    <ImLocation className="text-green mr-2 transform -rotate-90 flex-none mt-1 h-full" />
                                    <span>Advocacy campaign for coastal communities,</span>
                                </li>
                                <li className="flex items-start p-1 pl-3">
                                    <ImLocation className="text-green mr-2 transform -rotate-90 flex-none mt-1 h-full" />
                                    <span>Awareness and community engagement aimed at changing hostile behaviour towards turtles that come onshore to lay eggs,</span>
                                </li>
                                <li className="flex items-start p-1 pl-3">
                                    <ImLocation className="text-green mr-2 transform -rotate-90 flex-none mt-1 h-full" />
                                    <span>Release of captured turtles back to the sea, Conservation actions where nature based solutions are considered as mitigation to climate change, </span>
                                </li>
                                <li className="flex items-start p-1 pl-3">
                                    <ImLocation className="text-green mr-2 transform -rotate-90 flex-none mt-1 h-full" />
                                    <span>and Community/ beach clean-up exercises.</span>
                                </li>
                            </ul>
                            <p>
                                We will be engaging more communities along the Nigerian coastline as a way of protecting other species such as the African Manatee Trichechus senegalensis, as well as whales that sometime beach (Cetacean stranding).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 md:px-0 px-8">
                <div className="text-left mb-4">
                    <h2 className="font-bold text-2xl text-green">
                        WETLAND
                    </h2>
                    <hr className="h-1 my-4 bg-transparent border-0 border-t border-solid border-gray-200" />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center">
                    <div className="block">
                        <p>
                            Despite their crucial ecosystem services, the wetlands are seriously under stress and direct encroachment as a result of human activities. We work to preserve the 11 internationally recognised wetlands in Nigeria and by extension, the biodiversities that depend on the ecosystem to thrive.
                            Activities we engage in across wetlands where we operate are:
                        </p>
                        <ul className="my-4 list-disc list-inside">
                            <li className="list-item">water birds census</li>
                            <li className="list-item">public awareness campaign</li>
                            <li className="list-item">school conservation clubs</li>
                            <li className="list-item">tree planting</li>
                        </ul>
                        <p>
                            Specifically, in Hadejia Nguru Wetlands, North-East Nigeria, we work with the community to restore and maintain about 70km of wetlands which supports livelihood for over 1,000 household in 7 communities.
                            The yearly commemoration of World Wetlands Day across the country is central to our 
                            effort at raising awareness and policy advocacy on the wetlands.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/nature/wetland.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWork
