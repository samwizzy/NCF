import React from 'react'
import HomeSlider from "./components/slider/Slider"
// import {HiOutlineSearch, HiViewGrid} from "react-icons/hi"
// import {MdStarBorder} from "react-icons/md"
// import _ from 'lodash'

const people = [
  {
    name: 'Birding Binocular',
    description: 'Olympus 8×42 pro Binocular with Extra-low dispersion (ED) glass.',
    quantity: '2',
    price: '₦ 131,250',
    subtotal: '₦ 131,250',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

function Cart() {
	return (
		<div>
			<HomeSlider />
			<div className="max-w-7xl mx-auto md:px-8 px-4 py-8 bg-white">
				<h2 className="text-gray-800 font-bold text-xl mb-4">Cart Summary (1 Item)</h2>

				<div className="flex flex-col">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-4">
						<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-800 tracking-wider">
												Item
											</th>
											<th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-800 tracking-wider">
												Quantity
											</th>
											<th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-800 tracking-wider">
												Unit Price
											</th>
											<th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-800 tracking-wider">
												Sub Total
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{people.map((person) => (
										<tr key={person.email}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-10 w-10">
														<img className="h-10 w-10 rounded-full" src={person.image} alt="" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">{person.name}</div>
														<div className="text-sm text-gray-500 w-64 whitespace-normal break-words">{person.description}</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="text-sm text-gray-900">{person.quantity}</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
													{person.price}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.subtotal}</td>
										</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className="bg-white flex justify-end shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-4">
						<div className="flex space-x-4">
							<button className="bg-gray-50 border hover:bg-gray-100 text-sm text-gray-600 font-bold py-2 px-4 rounded-sm">
								Apply Coupon
							</button>
							<button className="bg-gray-50 border hover:bg-gray-100 text-sm text-gray-600 font-bold py-2 px-4 rounded-sm">
								Continue Shopping
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto md:px-8 px-4 py-8 bg-white">
				<h2 className="text-gray-800 font-bold text-xl mb-4">Details</h2>

				<div className="grid grid-cols-12 gap-4">
					<div className="md:col-span-9 col-span-12 border">
						<div className="max-w-lg rounded overflow-hidden shadow-md mb-8">
							<div className="mb-2 border-b py-2 px-4">
								<span className="font-medium text-sm">Shipment Details</span>
							</div>
							<div className="p-4">
								<p className="text-gray-500 text-sm font-bold mb-2">Shipment 1 of 1 </p>
								<p className="text-gray-500 text-sm mb-4">Birding Binocular; Olympus 8×42 pro Binocular with Extra-low dispersion (ED) glass.</p>

								<p className="text-gray-500 text-sm">
									Delivered between{" "}
									<strong className="text-gray-800">Friday 30 Apr</strong> and{" "}
									<strong className="text-gray-800">Tuesday 4 May</strong>
								</p>
							</div>
						</div>

						<div className="max-w-lg rounded overflow-hidden shadow-md">
							<div className="flex justify-between font-medium text-sm mb-2 border-b py-2 px-4">
								<span>Sub Total</span>
								<span className="font-bold">₦ 131,250</span>
							</div>
							<div className="p-4">
								<p className="text-gray-600 text-sm font-bold mb-2">Shipping Fee</p>
								<p className="text-gray-700 text-xs mb-4">Shipping options will be updated<br/> during checkout.</p>

								<p className="text-green-light text-xs">Calculate Shipping</p>
							</div>
							<div className="flex justify-between font-medium text-sm border-t py-2 px-4">
								<span className="text-sm">Total</span>
								<div className="flex flex-col text-right">
									<span className="text-sm font-bold">₦132,750.00</span>
									<span className="text-xs text-gray-600">(includes ₦6,250.00 Tax estimated for Nigeria)</span>
								</div>
							</div>
						</div>
						
						<div className="max-w-lg flex justify-center border mt-8">
							<button className="bg-green border hover:bg-green-800 text-sm text-gray-100 font-bold py-2 px-4 rounded-sm">
								Proceed to checkout
							</button>
						</div>
					</div>

					<div className="md:col-span-3 col-span-12  border"></div>
				</div>

			</div>
		</div>
	)
}

export default Cart
