// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './LandLeasePage.module.css';
import {LandLeaseForm} from '../../components/LandLeaseForm/LandLeaseForm';
import {LabelPage} from '../../components/LabelPage/LabelPage';

export const LandLeasePage = () => {
	return (
		<div className={styles.container}>
			<LabelPage title={'Thuê Đất'} />
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
