import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Social from './pages/Social';
import Contact from './pages/Contact';
import Signin from './pages/Signin';

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} />
					<Route path="/services" component={Services} />
					<Route path="/social" component={Social} />
					<Route path="/signin" component={Signin} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
