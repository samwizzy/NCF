import Root from '../layout';
import { NFCUtils } from '@nfc';
import { HomeConfig } from '../main/home/homeConfig';
import { AboutUsConfig } from '../main/about-us/aboutUsConfig';
import { ContactUsConfig } from '../main/contact/contactConfig';
import { OurWorkConfig } from '../main/our-work/ourWorkConfig';
import { ShopConfig } from '../main/shop/shopConfig';
import { CartConfig } from '../main/cart/cartConfig';
import { LibraryConfig } from '../main/library/libraryConfig';
import { GetInvolvedConfig } from '../main/get-involved/getInvolvedConfig';

const routeConfigs = [
  HomeConfig,
  AboutUsConfig,
  ContactUsConfig,
  OurWorkConfig,
  ShopConfig,
  CartConfig,
  LibraryConfig,
  GetInvolvedConfig,
];

const routes = [
  {
    component: Root,
    routes: [...NFCUtils.generateRoutesFromConfigs(routeConfigs)],
  },
];

export default routes;
