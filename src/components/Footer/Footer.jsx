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
import styles from './Footer.module.css'; // Import CSS module

const {Footer} = Layout;

const CustomFooter = () => {
	return (
		<div>
			<Footer className={styles.footer}>
				<Row justify="space-between" align="middle" className={styles['footer-content']}>
					{/* Bên trái: Agri Farm và các biểu tượng mạng xã hội */}
					<Col xs={24} sm={12}>
						<div className={styles['footer-left']}>
							<h2>Nông Trại Agri</h2>
							<p>
								Kết nối bạn với những mảnh đất tiềm năng, cung cấp dịch vụ thuê đất
								toàn diện và hỗ trợ canh tác, đảm bảo sản phẩm đạt tiêu chuẩn
								VietGAP.
							</p>
							<div className={styles.socialContainer}>
								<span className={styles['social-icons']}>
									<CameraOutlined className={styles.icon} />
								</span>
								<span className={styles['social-icons']}>
									<EnvironmentOutlined className={styles.icon} />
								</span>
								<span className={styles['social-icons']}>
									<FacebookOutlined className={styles.icon} />
								</span>
								<span className={styles['social-icons']}>
									<BehanceOutlined className={styles.icon} />
								</span>
							</div>
						</div>
					</Col>

					{/* Bên phải: Thông tin liên hệ */}
					<Col xs={24} sm={12}>
						<div className={styles['footer-right']}>
							<h3>Liên Hệ</h3>
							<p>
								<MailOutlined /> agrifarm2024@gmail.com
							</p>
							<p>
								<EnvironmentOutlined /> Ấp Trung Tâm xã Thanh Bình huyện Trảng Bom
								tỉnh Đồng Nai
							</p>
							<p>
								<PhoneOutlined /> (028) 7300 5588
							</p>
						</div>
					</Col>
				</Row>
			</Footer>
			<div className={styles['footer-bottom']}>
				Website AgriFarm ©{new Date().getFullYear()} Được tạo bởi Đội ngũ AgriFarm
			</div>
		</div>
	);
};

export default CustomFooter;
