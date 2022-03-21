import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

function App() {
	return (
		<div className="container-fluid">
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/customers" className="nav-link">
								Customers
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className="nav-link">
								Products
							</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/customers" exact>
						<AppCustomers />
					</Route>
					<Route path="/products" exact>
						<AppProducts />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
