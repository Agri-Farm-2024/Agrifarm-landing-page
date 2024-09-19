import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import {ConfigProvider} from 'antd';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#7fb640',
				},
				components: {
					Button: {
						colorPrimary: '#7fb640',
						defaultActiveBorderColor: '#7fb640',
						defaultHoverBorderColor: '#7fb640',
					},
				},
			}}
		>
			<App />
		</ConfigProvider>
	</Provider>
);
