// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './LandLeasePage.module.css';
import {imageExporter} from '../../assets/images';
import {LandLeaseForm} from '../../components/LandLeaseForm/LandLeaseForm';

export const LandLeasePage = () => {
	return (
		<div className={styles.container}>
			<div
				style={{
					backgroundImage: `url(${imageExporter.label})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					width: '100%',
					height: '300px', // Hoặc bạn có thể tùy chỉnh chiều cao theo ý muốn
					marginBottom: '20px',
					display: 'flex',
					justifyContent: 'center', // Căn giữa theo chiều ngang
					alignItems: 'center', // Căn giữa theo chiều dọc
					color: 'white', // Màu chữ trắng để dễ nhìn (tuỳ chỉnh nếu cần)
					fontSize: '40px', // Kích thước chữ
					fontWeight: 'bold', // Đậm nét chữ
					textShadow: '2px 2px 4px rgba(0,0,0,0.7)', // Đổ bóng cho chữ dễ đọc hơn
				}}
			>
				Thuê Đất
			</div>
			<section className={styles.advise}>
				<div className={styles.adviseTitle}>
					<p>
						<div>Bạn muốn thuê đất? </div>
						<span>
							Hãy điền các thông tin được yêu cầu để chúng tôi tạo tài khoản cho bạn
							nhé!
						</span>
					</p>
					<p>
						Tài khoản của bạn sẽ được gửi qua mail khi được tạo thành công. Nhớ kiểm tra
						mail thường xuyên nhé!
					</p>
				</div>
				<div className={styles.adviseForm}>
					<LandLeaseForm />
				</div>
			</section>
		</div>
	);
};
