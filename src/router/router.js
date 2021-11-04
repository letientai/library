import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Product from "../pages/productDetail/product";


function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/product/:id" component={Product} />

            </Switch>
        </BrowserRouter>
    )
}
export default Router;