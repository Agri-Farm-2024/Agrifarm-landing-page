import React, {useState, useEffect} from 'react';
import {Layout, Row, Col, Pagination, Select, message, Empty} from 'antd';
import LandItem from './LandItem/LandItem';
import Loading from '../../components/Loading/Loading';
import styles from './LandPage.module.css';
import {LabelPage} from '../../components/LabelPage/LabelPage';
import {getLandsByStatus} from '../../services/api';

const {Content} = Layout;
const {Option} = Select;

export const LandPage = () => {
	const [loading, setLoading] = useState(true); // Trạng thái loading
	const [filterStatus, setFilterStatus] = useState('all'); // Trạng thái bộ lọc
	const [dataRender, setDataRender] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại
	const [pageSize, setPageSize] = useState(8); // Số lượng mảnh đất hiển thị trên mỗi trang
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		setLoading(true);
		getLandsByStatus({status: filterStatus, page_size: pageSize, page_index: currentPage})
			.then((response) => {
				setLoading(false);
				if (response.statusCode === 200) {
					console.log(response.metadata);
					setDataRender(response.metadata.lands);
					setTotalPages(response.metadata.pagination.total_page);
				}
				// console.log('Fetched lands successfully:', response.metadata);
				// Handle the successful response here, such as updating state or processing the data
			})
			.catch((error) => {
				setLoading(false);
				setDataRender([]);

				if (error.response) {
					console.error('Error fetching lands:', error.response.data);
				} else {
					console.error('Error:', error.message);
				}
			});
	}, [filterStatus, currentPage]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		console.log(page);
	};

	const handleFilterChange = (value) => {
		setFilterStatus(value);
		setCurrentPage(1);
	};

	return (
		<Layout>
			<Content style={{textAlign: 'center'}}>
				<LabelPage title={'Mảnh Đất'} />
				<div style={{padding: '50px 50px'}}>
					<div
						style={{
							marginBottom: '20px',
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
						}}
					>
						<h3 style={{marginRight: 20}}>Lọc theo trạng thái</h3>
						<Select
							placeholder="Chọn trạng thái"
							style={{
								width: 200,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-end',
							}}
							onChange={handleFilterChange}
							value={filterStatus}
							allowClear
						>
							<Option value="all">Tất cả</Option> //edit for all
							<Option value="booked">Mảnh đất đã đặt</Option>
							<Option value="repairing">Mảnh đất đang cải tạo</Option>
							<Option value="free">Mảnh đất đang trống</Option>
						</Select>
					</div>
					{loading ? (
						<Loading size="large" />
					) : (
						<div>
							{dataRender.length === 0 ? (
								<div style={{textAlign: 'center', marginTop: '20px'}}>
									<Empty
										description={<h3>Không có mảnh đất phù hợp</h3>}
										image={Empty.PRESENTED_IMAGE_SIMPLE}
									/>
								</div>
							) : (
								<Row gutter={[16, 16]}>
									{dataRender.map((item, index) => (
										<Col key={index} xs={24} sm={12} md={8} lg={6}>
											<LandItem
												id={item.land_id}
												title={item.name}
												description={item.title}
												image={item.url}
											/>
										</Col>
									))}
								</Row>
							)}
						</div>
					)}

					<div style={{display: 'flex', justifyContent: 'right'}}>
						<Pagination
							current={currentPage}
							pageSize={pageSize}
							total={totalPages * pageSize}
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
