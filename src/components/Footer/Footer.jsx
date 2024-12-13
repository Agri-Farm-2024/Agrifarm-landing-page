import React from 'react';
import {Layout, Row, Col} from 'antd';
import {
	MailOutlined,
	PhoneOutlined,
	EnvironmentOutlined,
	CameraOutlined,
	FacebookOutlined,
	BehanceOutlined,
} from '@ant-design/icons';

const {Footer} = Layout;

const CustomFooter = () => {
	return (
		<div>
			<Footer
				style={{
					backgroundColor: '#7FB640', // Nền màu xanh lá cây
					color: 'white',
					padding: '70px',
				}}
			>
				<Row justify="space-between" align="middle" style={{padding: '0 40px'}}>
					{/* Bên trái: Agri Farm và các biểu tượng mạng xã hội */}
					<Col xs={24} sm={12}>
						<div>
							<h2
								style={{
									color: 'white',
									marginBottom: '20px',
									fontSize: 36,
									marginTop: 0,
								}}
							>
								Nông Trại Agri
							</h2>
							<p
								style={{
									color: 'white',
									marginBottom: 50,
									fontSize: 18,
									width: '80%',
								}}
							>
								Kết nối bạn với những mảnh đất tiềm năng, cung cấp dịch vụ thuê đất
								toàn diện và hỗ trợ canh tác, đảm bảo sản phẩm đạt tiêu chuẩn
								VietGAP.
							</p>
							<div style={{marginTop: '20px'}}>
								<span
									style={{
										padding: '15px 10px 10px 10px',
										background: 'white',
										marginRight: '15px',
										borderRadius: 5,
									}}
								>
									<CameraOutlined
										style={{
											fontSize: '24px',
											color: '#7FB640',
										}}
									/>
								</span>
								<span
									style={{
										padding: '15px 10px 10px 10px',
										background: 'white',
										marginRight: '15px',
										borderRadius: 5,
									}}
								>
									<EnvironmentOutlined
										style={{
											fontSize: '24px',
											color: '#7FB640',
										}}
									/>
								</span>
								<span
									style={{
										padding: '15px 10px 10px 10px',
										background: 'white',
										marginRight: '15px',
										borderRadius: 5,
									}}
								>
									<FacebookOutlined
										style={{
											fontSize: '24px',
											color: '#7FB640',
										}}
									/>
								</span>
								<span
									style={{
										padding: '15px 10px 10px 10px',
										background: 'white',
										marginRight: '15px',
										borderRadius: 5,
									}}
								>
									<BehanceOutlined
										style={{
											fontSize: '24px',
											color: '#7FB640',
										}}
									/>
								</span>
							</div>
						</div>
					</Col>

					{/* Bên phải: Thông tin liên hệ */}
					<Col xs={24} sm={12}>
						<div>
							<h3 style={{color: 'white', fontSize: 21}}>Liên Hệ</h3>
							<p style={{color: 'white', margin: '16px 0'}}>
								<MailOutlined /> agrifarm2024@gmail.com
							</p>
							<p style={{color: 'white', margin: '16px 0'}}>
								<EnvironmentOutlined /> Ấp Trung Tâm xã Thanh Bình huyện Trảng Bom
								tỉnh Đồng Nai
							</p>
							<p style={{color: 'white', margin: '16px 0'}}>
								<PhoneOutlined /> (028) 7300 5588
							</p>
						</div>
					</Col>
				</Row>
			</Footer>
			<div style={{textAlign: 'center', padding: '15px 0', color: '#707070', fontSize: 15}}>
				Website AgriFarm ©{new Date().getFullYear()} Được tạo bởi Đội ngũ AgriFarm
			</div>
		</div>
	);
};

export default CustomFooter;
