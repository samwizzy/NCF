// import { Fragment } from 'react'
import { renderRoutes } from "react-router-config"
import Appbar from "./components/Appbar/Appbar"
import TopHeader from "./components/TopBar/TopHeader"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"

function AppLayout({route}) {
	return (
		<div className="">
			<header className="w-full flex flex-col bg-transparent fixed z-50">
				<TopHeader />
				<Appbar />
			</header>

			<Content>
				{/* <Fragment>{children}</Fragment> */}
				{renderRoutes(route.routes)}
			</Content>

			<Footer />
		</div>
	)
}

export default AppLayout