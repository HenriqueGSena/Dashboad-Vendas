import Dashboard from "pages/Dashboard";
import Home from "pages/Home/Index";
import { Switch } from "react-router-dom";
import { BrowserRouter, Route} from "react-router-dom";

const Routes = () => {
    return (
       <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
       </BrowserRouter>
    );
}

export default Routes;