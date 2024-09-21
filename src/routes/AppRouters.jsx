import {Navigate, Route, Routes} from 'react-router-dom';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {HomePage} from '../pages/HomePage/HomePage';
import {NotFoundPage} from '../pages/NotFoundPage/NotFoundPage';
import {LandPage} from '../pages/LandPage/LandPage';
import {LandLeasePage} from '../pages/LandLeasePage/LandLeasePage';
import {CultivationDiaryView} from '../pages/CultivationDiaryView/CultivationDiaryView';
import {LandDetailPage} from '../pages/LandDetailPage/LandDetailPage';

const AppRouters = () => {
	return (
		<DefaultLayout>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/land" element={<LandPage />} />
				<Route path="/land-detail/:id" element={<LandDetailPage />} />
				<Route path="/land-lease" element={<LandLeasePage />} />
				<Route path="/cultivation-diary/:id" element={<CultivationDiaryView />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</DefaultLayout>
	);
};

export default AppRouters;
