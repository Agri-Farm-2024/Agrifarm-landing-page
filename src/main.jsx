import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import {ConfigProvider} from 'antd';
import locale from 'antd/locale/vi_VN';
import dayjs from 'dayjs';

import 'dayjs/locale/vi';

dayjs.locale('vi');

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ConfigProvider
			locale={locale}
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
