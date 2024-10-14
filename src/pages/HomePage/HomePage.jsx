import React from 'react';
import styles from './HomePage.module.css';
import {
	AuditOutlined,
	BookOutlined,
	FileProtectOutlined,
	SolutionOutlined,
} from '@ant-design/icons';
import {Avatar, Button, FloatButton, Rate} from 'antd';
import {AdviseForm} from '../../components/AdviseForm/AdviseForm';
import {Link} from 'react-router-dom';

const servicePackages = [
	{
		icon: <AuditOutlined className={styles.serviceIcon} />,
		content: 'Cho thuê đất để trồng trọt',
	},
	{
		icon: <SolutionOutlined className={styles.serviceIcon} />,
		content: 'Cung cấp kỹ thuật canh tác',
	},
	{
		icon: <BookOutlined className={styles.serviceIcon} />,
		content: 'Ghi nhật ký canh tác',
	},
	{
		icon: <FileProtectOutlined className={styles.serviceIcon} />,
		content: 'Quy trình trồng trọt theo tiêu chuẩn VietGAP',
	},
];

const procedures = [
	{
		image: 'https://static1.backyardbossimages.com/wordpress/wp-content/uploads/2022/12/Cantaloupe-on-a-trellis.jpg',
		title: 'Dưa lưới',
	},
	{
		image: 'https://agric4profits.com/wp-content/uploads/2023/12/images-2-5.jpeg',
		title: 'Ngô',
	},
	{
		image: 'https://cdn.tgdd.vn/2021/08/content/2.2-800x450-2.jpg',
		title: 'Bí đỏ',
	},
	{
		image: 'https://caythuoc.org/wp-content/uploads/2019/05/Cay-rau-bap-cai.jpg',
		title: 'Bắp cải',
	},
];

const ratings = [
	{
		avatar: 'https://i.pinimg.com/564x/bb/f7/79/bbf7790a9929f04b3c25824125dcdade.jpg',
		name: 'Charlie Leuschke',
		starNumber: 5,
		ratingContent:
			'Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.',
	},
	{
		avatar: 'https://i.pinimg.com/564x/0a/6d/fa/0a6dfadd10cd91972a20b6e03e7f6ee6.jpg',
		name: 'Luke Glover',
		starNumber: 5,
		ratingContent:
			'Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.',
	},
	{
		avatar: 'https://i.pinimg.com/564x/6d/63/e0/6d63e0aba7529d07dac5fbe5a6f37613.jpg',
		name: 'Roderick Schumm',
		starNumber: 5,
		ratingContent:
			'Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.',
	},
	{
		avatar: 'https://i.pinimg.com/564x/ca/81/08/ca810811f3e85220193f9afdbeb3f7a9.jpg',
		name: 'Brandi Boyle',
		starNumber: 5,
		ratingContent:
			'Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.',
	},
	{
		avatar: 'https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg',
		name: 'Scott Runolfsdottir',
		starNumber: 5,
		ratingContent:
			'Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.',
	},
	{
		avatar: 'https://i.pinimg.com/564x/64/32/16/6432169e11146bfecba528cdfdc02b57.jpg',
		name: 'Claire Witting',
		starNumber: 5,
		ratingContent:
			'Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.',
	},
];

const diaries = [
	{
		image: 'https://www.fao.org.vn/wp-content/uploads/2020/11/ky-thuat-trong-bap-cai-tai-nha.jpg',
		name: 'Nhật ký trồng cây cải theo chuẩn VietGAP',
		description:
			'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.',
	},
	{
		image: 'https://s3-eu-west-1.amazonaws.com/yara-links/h0q6.jpg',
		name: 'Nhật ký trồng dâu tây theo chuẩn VietGAP',
		description:
			'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.',
	},
	{
		image: 'https://ep.edu.vn/cach-trong-dua-hau-bang-hat/imager_14879.jpg',
		name: 'Nhật ký trồng dưa hấu theo chuẩn VIetGAP',
		description:
			'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.',
	},
];

export const HomePage = () => {
	return (
		<div style={{width: '100%'}}>
			<section className={styles.banner}>
				<span className={styles.titleBanner}>
					Trải Nghiệm Nông Nghiệp: Dịch Vụ Quản Lý Thuê Đất và Hỗ Trợ Canh Tác Toàn Diện
				</span>
			</section>

			<section className={styles.servicePackage}>
				<div className={styles.servicePackageTitleWrapper}>
					<p className={styles.servicePackageTitle}>Dịch vụ của trang trại</p>
					<p className={styles.servicePackageSubTitle}>
						Trang trại cung cấp các dịch vụ giúp cho việc canh tác trở nên dễ dàng và
						hiệu quả hơn
					</p>
				</div>
				<div className={styles.serviceContainer}>
					{servicePackages.map((item, index) => (
						<div key={index} className={styles.serviceItemWrapper}>
							{item.icon}
							<p className={styles.serviceTitle}>{item.content}</p>
						</div>
					))}
				</div>
			</section>

			<section className={styles.servicePackage}>
				<div className={styles.servicePackageTitleWrapper}>
					<p className={styles.servicePackageTitle}>Quy trình trồng trọt</p>
					<p className={styles.servicePackageSubTitle}>
						Quy trình trồng trọt của các loại cây mà trang trại hỗ trợ quy trình đạt
						chuẩn VietGAP
					</p>
				</div>
				<div className={styles.serviceContainer}>
					{procedures.map((procedure, index) => (
						<div key={index} className={styles.serviceItemWrapper}>
							<img
								className={styles.procedureImg}
								src={procedure.image}
								alt="ảnh quy trình"
							></img>
							<p className={styles.serviceTitle}>{procedure.title}</p>
							<Button type="primary" className={styles.procedureBtn}>
								Đọc thêm
							</Button>
						</div>
					))}
				</div>
			</section>

			<section className={styles.subBanner}></section>

			<section className={styles.servicePackage}>
				<div className={styles.servicePackageTitleWrapper}>
					<p className={styles.servicePackageTitle}>Đánh giá của khách hàng</p>
					<p className={styles.servicePackageSubTitle}>
						Đánh giá đến từ khách hàng của chúng tôi, những người gửi phản hồi sau khi
						sử dụng dịch vụ trang trại của chúng tôi
					</p>
				</div>

				<div className={styles.ratingContainer}>
					{ratings.map((rating, index) => (
						<div key={index} className={styles.ratingItemWrapper}>
							<div className={styles.ratingItemHeader}>
								<Avatar
									size={60}
									shape="circle"
									src={<img src={rating.avatar} alt="avatar" />}
								/>
								<div>
									<p>{rating.name}</p>
									<Rate disabled defaultValue={rating.starNumber} />
								</div>
							</div>
							<p>{rating.ratingContent}</p>
						</div>
					))}
				</div>
			</section>

			<section className={styles.servicePackage}>
				<div className={styles.servicePackageTitleWrapper}>
					<p className={styles.servicePackageTitle}>Nhật ký</p>
					<p className={styles.servicePackageSubTitle}>
						Nhật ký canh tác của các khách hàng của trang trại
					</p>
				</div>

				<div className={styles.serviceContainer}>
					{diaries.map((diary, index) => (
						<div key={index} className={styles.diaryItemWrapper}>
							<img src={diary.image}></img>
							<p className={styles.diaryTitle}>{diary.name}</p>
							<p className={styles.description}>{diary.description}</p>
							<Link to="/cultivation-diary/1">
								<p className={styles.readMore}>Read more</p>
							</Link>
						</div>
					))}
				</div>
			</section>

			<section className={styles.advise}>
				<div className={styles.adviseTitle}>
					<p>
						<span>Điền các thông tin vào form </span>
						<span>để xem đất canh tác</span>
					</p>
					<p>
						Hệ thống sẽ gửi thông tin xác nhận qua email, vui lòng kiểm tra thường xuyên
					</p>
				</div>
				<div className={styles.adviseForm}>
					<AdviseForm />
				</div>
			</section>
			<FloatButton.BackTop
				type="primary"
				style={{
					height: '3rem',
					width: '3rem',
				}}
			/>
		</div>
	);
};
