import { BrowserRouter, Switch, Route } from "react-router-dom";
import Buy from "../pages/buy/buy";
import Home from "../pages/home/home";
import Product from "../pages/productDetail/product";


function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/product/:id" component={Product} />
                <Route path="/buy/:id" component={Buy} />

            </Switch>
        </BrowserRouter>
    )
}
export default Router;