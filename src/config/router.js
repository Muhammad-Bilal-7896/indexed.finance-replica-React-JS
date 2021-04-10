import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from '../Components/Home';
import Governance from '../Components/Governance';
import Categories from "../Components/Categories";
import Stake from "../Components/Stake";
import IndexDetails from "../Components/IndexDetails";
import StakeDetails from "../Components/StakeDetails";
import GovernanceDetails from "../Components/GovernanceDetails";
import CategoryDetails from "../Components/CategoryDetails";
import InputButton from "../Components/InputButton";
import Docs from "../Components/Docs";
import PortfolioPage from "../Components/PortfolioPage";
import PoolDetails from "../Components/PoolDetails";

class AppRouter extends React.Component {
    render() {
        return (
                  <Router>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/governance" component={Governance}/>
                      <Route exact path="/categories" component={Categories}/>
                      <Route exact path="/stake" component={Stake}/>
                      <Route exact path="/index/details" component={IndexDetails}/>
                      <Route exact path="/stake/details" component={StakeDetails}/>
                      <Route exact path="/governance/details" component={GovernanceDetails}/>
                      <Route exact path="/category/details" component={CategoryDetails}/>
                      <Route exact path="/btn" component={InputButton} />
                      <Route exact path="/docs" component={Docs} />
                      <Route exact path="/portfolio" component={PortfolioPage} />
                      <Route exact path="/pool/details" component={PoolDetails} />
                  </Router>

        )
    }
}
export default AppRouter;