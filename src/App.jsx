import {ToastContainer} from 'react-toastify';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouters from './routes/AppRouters';

function App() {
	return (
		<BrowserRouter>
			<AppRouters />
			<ToastContainer limit={3} />
		</BrowserRouter>
	);
}

export default App;
