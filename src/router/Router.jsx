import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import LandingPage from "../pages/landingPage/LandingPage";
function Router() {
    return ( <BrowserRouter>
        <Switch>
            <Route path='/' component={LandingPage}></Route>
        </Switch>
    
    </BrowserRouter> );
}

export default Router;