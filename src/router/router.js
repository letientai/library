import { BrowserRouter, Switch, Route } from "react-router-dom";
import Buy from "../pages/buy/buy";
import Home from "../pages/home/home";
import Product from "../pages/productDetail/product";


function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/library" component={Home} exact/>
                <Route path="/library/product/:id" component={Product} />
                <Route path="/library/buy/:id" component={Buy} />

            </Switch>
        </BrowserRouter>
    )
}
export default Router;