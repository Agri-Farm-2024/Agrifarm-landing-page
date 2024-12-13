import React, {useEffect, useState} from 'react';
import styles from './CultivationDiaryView.module.css';
import {DiaryProgress} from '../../components/DiaryProgress/DiaryProgress';
import {useParams} from 'react-router';
import {getDiaryByID} from '../../services/api';
import {capitalizeFirstLetter, formatDateObj} from '../../utils';
import {Button} from 'antd';
import {MaterialUsedModal} from './MaterialUsedModal/MaterialUsedModal';

export const CultivationDiaryView = () => {
	const {id} = useParams();
	console.log('diary id', id);

	const [diary, setDiary] = useState(null);
	const [isShowModal, setIsShowModal] = useState(false);

	useEffect(() => {
		getDiaryByID(id)
			.then((response) => {
				if (response.statusCode === 200) {
					setDiary(response.metadata);
				}

				console.log('Fetched diary successfully:', response.metadata);
				// Handle the successful response here, such as updating state or processing the data
			})
			.catch((error) => {
				if (error.response) {
					console.error('Error fetching diary:', error.response.data);
				} else {
					console.error('Error:', error.message);
				}
			});
	}, [id]);

	return (
		<div>
			<section className={styles.headerBanner}>
				<p className={styles.titleBanner}>Nhật ký canh tác</p>
			</section>

			{diary && (
				<section className={styles.diaryContainer}>
					<p className={styles.diaryTitle}>
						{`
							Nhật ký trồng ${diary?.service_specific?.plant_season?.plant?.name} 
							${formatDateObj(diary?.process_technical_specific_stage[0]?.time_start, 1)}-
							${formatDateObj(diary?.process_technical_specific_stage[diary?.process_technical_specific_stage?.length - 1]?.time_end, 1)}`}
					</p>
					<div className={styles.diaryContent}>
						<div className={styles.diaryInfo}>
							<p>Người trồng: {diary?.service_specific?.land_renter?.full_name}</p>
							<p>Nhân viên phụ trách: {diary?.expert?.full_name}</p>
							<p>
								Giống cây:{' '}
								{capitalizeFirstLetter(
									diary?.service_specific?.plant_season?.plant?.name
								)}
							</p>
							<p>
								Loại dịch vụ sử dụng:{' '}
								{diary?.service_specific?.service_package?.name}
							</p>
							<p>Ngày tạo: {formatDateObj(diary?.created_at, 2)}</p>
							<p>
								Vật tư sử dụng:{' '}
								<Button onClick={() => setIsShowModal(true)} type="default">
									Xem vật tư
								</Button>
							</p>
						</div>
						<div className={styles.diaryProgress}>
							<DiaryProgress diaryProgress={diary} />
						</div>
					</div>
					<MaterialUsedModal
						isModalOpen={isShowModal}
						handleModalClose={() => setIsShowModal(false)}
						materialList={diary?.process_technical_specific_stage}
					/>
				</section>
			)}

			{!diary && <p className={styles.notFoundMessage}>Không tìm thấy nhật ký</p>}
		</div>
	);
};
