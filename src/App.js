import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyles from './GlobalStyles';
import {
	Cart,
	Checkout,
	Home,
	Shop,
	SingleProductPage,
	ErrorPage,
} from './pages';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/shop/product/id' element={<SingleProductPage />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<GlobalStyles />
			</BrowserRouter>
		</>
	);
}

export default App;
