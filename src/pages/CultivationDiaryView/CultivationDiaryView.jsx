import React, {useEffect, useState} from 'react';
import styles from './CultivationDiaryView.module.css';
import {DiaryProgress} from '../../components/DiaryProgress/DiaryProgress';
import {useParams} from 'react-router';
import {getDiaryByID} from '../../services/api';
import {capitalizeFirstLetter, formatDateObj} from '../../utils';

const diaryContent = [
	{
		stageTitle: 'Giai đoạn 1: Chuẩn bị trồng',
		dayFrom: '24/03/2024',
		dayTo: '27/03/2024',
		actionTitle: 'Chuẩn bị giá thể',
		actionDescription: 'Bắt đầu xử lý mụn xơ dừa bằng cách ngâm và xả để loại bỏ tannin',
		imageReport: [
			'https://tiimg.tistatic.com/fp/1/007/500/soil-food-agriculture-vermicompost-1-kg-pack-used-in-all-types-of-crops-733.jpg',
			'https://lzd-img-global.slatic.net/g/p/0e5b66a7e2a76f41f3ee8afc149f42bf.jpg_720x720q80.jpg',
		],
		isDone: true,
	},
	{
		stageTitle: 'Giai đoạn 1: Chuẩn bị trồng',
		dayFrom: '28/03/2024',
		dayTo: '28/03/2024',
		actionTitle: 'Gieo hạt',
		actionDescription:
			'Chuẩn bị bầu đất hoặc luống gieo hạt.\nGieo hạt cách nhau khoảng 5 cm trên bề mặt đất hoặc trong bầu đất, với độ sâu 1-2 cm.\nChe phủ một lớp mỏng đất hoặc rơm rạ để giữ ẩm cho hạt.',
		imageReport: [
			'https://greeneagle.com.my/wp-content/uploads/2019/09/seeds-2.jpg',
			'https://gardeningtips.in/wp-content/uploads/How-to-Plant-Grass-Seed-3.jpg',
			'https://gardeningtips.in/wp-content/uploads/How-to-Plant-Grass-Seed-3.jpg',
		],
		isDone: true,
	},
	{
		stageTitle: 'Giai đoạn 1: Chuẩn bị trồng',
		dayFrom: '29/03/2024',
		dayTo: '01/04/2024',
		actionTitle: 'Tưới Nước và Chăm Sóc Gieo Hạt',
		actionDescription:
			'Tưới nước nhẹ nhàng hàng ngày để giữ ẩm cho đất.\nĐảm bảo điều kiện nhiệt độ từ 18-22°C cho hạt nảy mầm.\nKiểm tra tỷ lệ nảy mầm và xử lý cây con không đều hoặc chết.',
		imageReport: [
			'https://www.aicr.org/wp-content/uploads/2017/06/62708942_m.jpg',
			'https://www.aicr.org/wp-content/uploads/2017/06/62708942_m.jpg',
		],
		isDone: true,
	},
	{
		stageTitle: 'Giai Đoạn 2: Chăm Sóc Cây Con',
		dayFrom: '02/04/2024',
		dayTo: '04/04/2024',
		actionTitle: 'Tiếp tục chăm sóc cây con',
		actionDescription:
			'Tiếp tục tưới nước đều đặn, giữ ẩm cho đất.\nLoại bỏ cỏ dại xung quanh cây con để giảm cạnh tranh dinh dưỡng',
		imageReport: [''],
		isDone: false,
	},
	{
		stageTitle: 'Giai Đoạn 2: Chăm Sóc Cây Con',
		dayFrom: '05/04/2024',
		dayTo: '08/04/2024',
		actionTitle: 'Làm sạch cây con',
		actionDescription:
			'Thực hiện làm sạch cây con, loại bỏ cây yếu hoặc bị bệnh.\nBón thúc lần đầu bằng phân hữu cơ hoặc phân vi sinh (10-15 kg/ha) để kích thích sự phát triển.',
		imageReport: [''],
		isDone: false,
	},
];

export const CultivationDiaryView = () => {
	const {id} = useParams();
	console.log('diary id', id);

	const [diary, setDiary] = useState(null);

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
						</div>
						<div className={styles.diaryProgress}>
							<DiaryProgress diaryProgress={diary} />
						</div>
					</div>
				</section>
			)}

			{!diary && <p className={styles.notFoundMessage}>Không tìm thấy nhật ký</p>}
		</div>
	);
};
