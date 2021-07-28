import React from 'react'
import {ImLocation} from "react-icons/im"
import data from "./data/mock.json"
import {Event} from "./styles"
import HomeSlider from "./components/slider/Slider"

function AboutUs() {
    return (
        <div>
            <HomeSlider />
            <div className="w-full bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 md:px-0 px-8">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 items-start md:mb-0 mb-8">
                        <div className="">
                            <img src="/assets/images/nature/about.png" alt="" />
                        </div>
                        <div className="block mt-4">
                            <h1 className="text-2xl font-bold has-text-primary mb-2">NCF Secretariat.</h1>
                            <p className="is-size-6 font-base">
                                The Nigerian Conservation Foundation (NCF) is the premier Non Governmental Organisation (NGO) dedicated to nature conservation and sustainable development in Nigeria. Established in 1980, the Foundation was registered in 1982 as a Charitable Trust under the Land (Perpetual Succession) Act of 1961 - a policy that was replaced by the Company and Allied Matters Act of 1990. Founded by late Chief S. L. Edu, NCF has its patron as the President and Commander- In-Chief of the Armed Force of the Federal Republic of Nigeria.
                            </p>
                        </div>
                    </div>

                    <div className="text-base mt-8">
                        <p className="mb-3">
                            The Foundation has  a vision of "a Nigeria where people prosper while living in harmony with nature". This vision drives its Mission to preserve the full range of Nigeria’s biodiversity which includes species, ecosystems and genetic biodiversity;  promote the sustainable use of natural resources for the benefit of present and future generations; and advocate actions that minimise pollution and wasteful utilisation of renewable resources.
                            NCF maintains the lead in promoting environmental conservation and sustainable development; thus, the institutional symbol of natural resource management in Nigeria.
                            Through its conservation projects, the foundation has developed unique nature conservation strategies that cater for the needs of people while maintaining ecosystem stability. Its ability to work across the spectrum of local communities,corporate bodies and the various tiers of Government using evidence-based actions are the unrivalled standards that pronounce our competence.
                        </p>
                        <p>
                            NCF operations focus on environmental education, biodiversity conservation, policy advocacy, public sensitization on environmental issues, 
                            mitigating environmental pollution and poverty reduction.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 md:px-0 px-8">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 items-center md:mb-0 mb-8">
                        <div className="">
                            <div className="block">
                                <h1 className="text-2xl font-bold has-text-primary mb-2">AFFILIATION</h1>
                                <p className="mb-3">
                                    The Foundation is a BirdLife International Partner in Nigeria, an associate of Worldwide Fund for Nature (WWF) and  member of International Union for Conservation of Nature (IUCN). Other notable international partners include Royal Society for the Protection of Birds (RSPB), Wetlands International as well as Fauna and Flora International (FFI).
                                    Locally, NCF forges strong partnerships with other environmental NGOs, Government institutions, business community, academia, and rural-urban communities that share its vision with the aim of building and sustaining a more lasting union to safeguard the environment.
                                </p>
                                <p className="">
                                    The National Secretariat is located at the Lekki Conservation Centre, Lagos with a Regional Office in Calabar as well as project offices in Eket and Oron (Akwa Ibom State), Gashaka (Taraba State), Hadejia-Nguru (Jigawa, Yobe and Bauchi States), Obudu Cattle Ranch (Cross River State), Yenegoa (Bayelsa State), Buru (Taraba State) Omo J4 (Ogun),  Ifon (Ondo) and Benin (Edo). We also have collaborative project outposts at IITA Ibadan (Oyo State) and Afi Mountain Wildlife Sanctuary (Cross River State).
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <img src="/assets/images/nature/forest.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-16 md:px-0 px-8">
                <div className="text-left mb-4">
                    <h1 className="font-bold text-2xl text-green mb-4">CONSERVATION PROJECTS</h1>
                    <p className="text-sm">
                        NCF projects which cut across Nigeria are dedicated to solving environmental problems through the improvement of livelihood of the host communities and in the long run protecting the vast biodiversity inherent in the community. Some of these projects include:
                    </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center">
                    <div className="block">
                        <ul class="w-full rounded-lg mt-2 mb-3 text-gray-800">
                            {data.projects.map((project, i) => 
                                <li key={i} className="flex items-start p-1 pl-3">
                                    <ImLocation size={14} className="text-green mr-2 mt-1.5 flex-none transform -rotate-90" />
                                    <span>{project.title}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="">
                        <img src="/assets/images/nature/elephant.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pb-16 md:px-0 px-8">
                <div className="text-left mb-4">
                    <p className="text-sm font-medium">
                        NCF's work has made major input into the following policy in Nigeria: ­
                    </p>
                </div>
                <div className="grid grid-cols-1 md:gap-8 gap-y-8 items-center">
                    <div className="block">
                        <ul class="w-full rounded-lg mt-2 mb-3 text-gray-800">
                            {data.projects1.map((project, i) => 
                                <li key={i} className="flex items-start p-1 pl-3">
                                    <ImLocation size={14} className="text-green mr-2 mt-1.5 flex-none transform -rotate-90" />
                                    <span>{project.title}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-white text-white">
                <Event className="w-full bg-no-repeat bg-left-top bg-auto"></Event>
            </div>

        </div>
    )
}

export default AboutUs
