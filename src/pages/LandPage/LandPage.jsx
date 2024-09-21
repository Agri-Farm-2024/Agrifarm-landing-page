import React, {useState, useEffect} from 'react';
import {Layout, Row, Col, Pagination} from 'antd';
import LandItem from './LandItem/LandItem'; // Import LandCard component
import Loading from '../../components/Loading/Loading';
import styles from './LandPage.module.css';
import {LabelPage} from '../../components/LabelPage/LabelPage';

const {Content} = Layout;

export const LandPage = () => {
	const [loading, setLoading] = useState(true); // Trạng thái loading
	const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại
	const [pageSize] = useState(6); // Số lượng mảnh đất hiển thị trên mỗi trang

	const data = [
		{
			title: 'Mảnh đất số 1',
			description:
				'Lorem ipsum is simply free available. Aenean leoquam. Pellentesquesemornare vestibulum.',
			image: 'https://s3-alpha-sig.figma.com/img/21bc/90f3/cfe329f86031932585db0ead10223de6?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKBQRdIza~W0JOiuGSP~g4~E7dXbJElaZsrjKSBr997dkWA~leP2Bp2Q-p-pTikJYK52h1FdClLRzGCpvP9SQe2HdRlKnoaMDeMrctxaj58pzan2clvHFHzrogEpcORiQaLVL6Jfn4nhx89KXT3b-jp4tZd2KCclh4xQlNZEPtffmQqJIPwy3CV7ROlGm5IH2vHUSYGa4fLnJbbyokoovCFTn9pYwXuSkd2x7y-x7CJ-NoOKMx2pNMELuVdgEZLEWvu5KBVbUDuGmFz4ELsRysORqA87u2Mc7Ea-FwPgzOXZX~AzA59~n8rw10q48gaqT73cOzb5hk4GvjSdYZK82w__', // Đường dẫn hình ảnh từ imageExporter
		},
		{
			title: 'Mảnh đất số 2',
			description:
				'Lorem ipsum is simply free available. Aenean leoquam. Pellentesquesemornare vestibulum.',
			image: 'https://s3-alpha-sig.figma.com/img/21bc/90f3/cfe329f86031932585db0ead10223de6?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKBQRdIza~W0JOiuGSP~g4~E7dXbJElaZsrjKSBr997dkWA~leP2Bp2Q-p-pTikJYK52h1FdClLRzGCpvP9SQe2HdRlKnoaMDeMrctxaj58pzan2clvHFHzrogEpcORiQaLVL6Jfn4nhx89KXT3b-jp4tZd2KCclh4xQlNZEPtffmQqJIPwy3CV7ROlGm5IH2vHUSYGa4fLnJbbyokoovCFTn9pYwXuSkd2x7y-x7CJ-NoOKMx2pNMELuVdgEZLEWvu5KBVbUDuGmFz4ELsRysORqA87u2Mc7Ea-FwPgzOXZX~AzA59~n8rw10q48gaqT73cOzb5hk4GvjSdYZK82w__', // Đường dẫn hình ảnh từ imageExporter
		},
		{
			title: 'Mảnh đất số 3',
			description:
				'Lorem ipsum is simply free available. Aenean leoquam. Pellentesquesemornare vestibulum.',
			image: 'https://s3-alpha-sig.figma.com/img/21bc/90f3/cfe329f86031932585db0ead10223de6?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKBQRdIza~W0JOiuGSP~g4~E7dXbJElaZsrjKSBr997dkWA~leP2Bp2Q-p-pTikJYK52h1FdClLRzGCpvP9SQe2HdRlKnoaMDeMrctxaj58pzan2clvHFHzrogEpcORiQaLVL6Jfn4nhx89KXT3b-jp4tZd2KCclh4xQlNZEPtffmQqJIPwy3CV7ROlGm5IH2vHUSYGa4fLnJbbyokoovCFTn9pYwXuSkd2x7y-x7CJ-NoOKMx2pNMELuVdgEZLEWvu5KBVbUDuGmFz4ELsRysORqA87u2Mc7Ea-FwPgzOXZX~AzA59~n8rw10q48gaqT73cOzb5hk4GvjSdYZK82w__', // Đường dẫn hình ảnh từ imageExporter
		},
		{
			title: 'Mảnh đất số 4',
			description:
				'Lorem ipsum is simply free available. Aenean leoquam. Pellentesquesemornare vestibulum.',
			image: 'https://s3-alpha-sig.figma.com/img/21bc/90f3/cfe329f86031932585db0ead10223de6?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKBQRdIza~W0JOiuGSP~g4~E7dXbJElaZsrjKSBr997dkWA~leP2Bp2Q-p-pTikJYK52h1FdClLRzGCpvP9SQe2HdRlKnoaMDeMrctxaj58pzan2clvHFHzrogEpcORiQaLVL6Jfn4nhx89KXT3b-jp4tZd2KCclh4xQlNZEPtffmQqJIPwy3CV7ROlGm5IH2vHUSYGa4fLnJbbyokoovCFTn9pYwXuSkd2x7y-x7CJ-NoOKMx2pNMELuVdgEZLEWvu5KBVbUDuGmFz4ELsRysORqA87u2Mc7Ea-FwPgzOXZX~AzA59~n8rw10q48gaqT73cOzb5hk4GvjSdYZK82w__', // Đường dẫn hình ảnh từ imageExporter
		},
		{
			title: 'Mảnh đất số 5',
			description:
				'Lorem ipsum is simply free available. Aenean leoquam. Pellentesquesemornare vestibulum.',
			image: 'https://s3-alpha-sig.figma.com/img/21bc/90f3/cfe329f86031932585db0ead10223de6?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKBQRdIza~W0JOiuGSP~g4~E7dXbJElaZsrjKSBr997dkWA~leP2Bp2Q-p-pTikJYK52h1FdClLRzGCpvP9SQe2HdRlKnoaMDeMrctxaj58pzan2clvHFHzrogEpcORiQaLVL6Jfn4nhx89KXT3b-jp4tZd2KCclh4xQlNZEPtffmQqJIPwy3CV7ROlGm5IH2vHUSYGa4fLnJbbyokoovCFTn9pYwXuSkd2x7y-x7CJ-NoOKMx2pNMELuVdgEZLEWvu5KBVbUDuGmFz4ELsRysORqA87u2Mc7Ea-FwPgzOXZX~AzA59~n8rw10q48gaqT73cOzb5hk4GvjSdYZK82w__', // Đường dẫn hình ảnh từ imageExporter
		},
		{
			title: 'Mảnh đất số 6',
			description:
				'Lorem ipsum is simply free available. Aenean leoquam. Pellentesquesemornare vestibulum.',
			image: 'https://s3-alpha-sig.figma.com/img/21bc/90f3/cfe329f86031932585db0ead10223de6?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKBQRdIza~W0JOiuGSP~g4~E7dXbJElaZsrjKSBr997dkWA~leP2Bp2Q-p-pTikJYK52h1FdClLRzGCpvP9SQe2HdRlKnoaMDeMrctxaj58pzan2clvHFHzrogEpcORiQaLVL6Jfn4nhx89KXT3b-jp4tZd2KCclh4xQlNZEPtffmQqJIPwy3CV7ROlGm5IH2vHUSYGa4fLnJbbyokoovCFTn9pYwXuSkd2x7y-x7CJ-NoOKMx2pNMELuVdgEZLEWvu5KBVbUDuGmFz4ELsRysORqA87u2Mc7Ea-FwPgzOXZX~AzA59~n8rw10q48gaqT73cOzb5hk4GvjSdYZK82w__', // Đường dẫn hình ảnh từ imageExporter
		},
	];

	// Mô phỏng thời gian tải dữ liệu
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000); // Giả lập thời gian tải là 1 giây
	}, []);

	// Lấy danh sách mảnh đất theo trang hiện tại
	const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	// Hàm xử lý khi thay đổi trang
	const handlePageChange = (page) => {
		setLoading(true);
		setCurrentPage(page);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<Layout>
			<Content style={{textAlign: 'center'}}>
				<LabelPage title={'Mảnh Đất'} />
				<div style={{padding: '50px 50px'}}>
					{loading ? (
						// Hiển thị loading khi đang tải
						<Loading size="large" />
					) : (
						<>
							<Row gutter={[16, 16]} justify="center">
								{paginatedData.map((item, index) => (
									<Col key={index} xs={24} sm={12} md={8} lg={7}>
										<LandItem
											title={item.title}
											description={item.description}
											image={item.image}
										/>
									</Col>
								))}
							</Row>
							{/* Thêm component Pagination */}
						</>
					)}
					<div style={{display: 'flex', justifyContent: 'right'}}>
						<Pagination
							current={currentPage}
							pageSize={pageSize}
							total={data.length}
							onChange={handlePageChange}
							style={{marginTop: '20px'}}
							className={styles.customPagination}
						/>
					</div>
				</div>
			</Content>
		</Layout>
	);
};

export default LandPage;
