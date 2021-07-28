import React from "react"
import { Router, /*Route*/ } from "react-router-dom"
import {renderRoutes} from "react-router-config"
import history from "./history"
// import AppLayout from "./layout"
import routes from "./config/routeConfig"

// const Home = React.lazy(() => import("./main/home"))
// const AboutUs = React.lazy(() => import("./main/about-us"))
// const OurWork = React.lazy(() => import("./main/our-work"))
// const Shop = React.lazy(() => import("./main/shop"))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={null}>
        <Router history={history}>
          {/* <AppLayout>
            <Fragment> */}
              {renderRoutes(routes)}
              {/* <Route exact path="/" component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/our-work" component={OurWork} />
              <Route path="/shop" component={Shop} /> */}
            {/* </Fragment>
          </AppLayout> */}
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
