import Root from "../layout"
import {NFCUtils} from "@nfc"
import { HomeConfig } from '../main/home/homeConfig';
import { AboutUsConfig } from '../main/about-us/aboutUsConfig';
import { OurWorkConfig } from '../main/our-work/ourWorkConfig';
import { ShopConfig } from '../main/shop/shopConfig';

const routeConfigs = [
  HomeConfig,
	AboutUsConfig,
	OurWorkConfig,
	ShopConfig
]

const routes = [
	{
		component: Root,
		routes: [
			...NFCUtils.generateRoutesFromConfigs(routeConfigs),
		]
	}
];

export default routes