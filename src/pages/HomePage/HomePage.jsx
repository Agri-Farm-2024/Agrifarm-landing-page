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
		image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/L%C3%A1_v%C3%A0_qu%E1%BA%A3_c%C3%A0_t%C3%ADm.jpg',
		title: 'Cà tím',
	},
	{
		image: 'https://nongsanhaugiang.com.vn/images/10012020/49f375da34844c5cd2271a72736c7005.jpg',
		title: 'Khổ qua',
	},
	{
		image: 'https://images.baodantoc.vn/uploads/2020/Th%C3%A1ng_12/Ng%C3%A0y%201/Thanh/21bcd1d6c33a91657f14828f444e8fac.jpg',
		title: 'Đậu bắp',
	},
	{
		image: 'https://file.hstatic.net/1000386738/file/z3617147747771_754c57bcf82f918b7b34fe3c57e3d1c5_30ca217c6dbb4f1cb81f2c682f2a2e92_grande.jpg',
		title: 'Dưa leo',
	},
];

const ratings = [
	{
		avatar: 'https://i.pinimg.com/564x/bb/f7/79/bbf7790a9929f04b3c25824125dcdade.jpg',
		name: 'Charlie Leuschke',
		starNumber: 5,
		ratingContent:
			'Trang trại thật sạch sẽ, không khí trong lành. Rau củ quả tươi ngon, đúng chuẩn hữu cơ. Nhân viên thân thiện và hỗ trợ tận tình!',
	},
	{
		avatar: 'https://i.pinimg.com/564x/0a/6d/fa/0a6dfadd10cd91972a20b6e03e7f6ee6.jpg',
		name: 'Luke Glover',
		starNumber: 5,
		ratingContent:
			'Tôi rất ấn tượng với chất lượng sản phẩm ở đây. Dịch vụ tốt, trang trại được chăm sóc kỹ lưỡng. Rất đáng để ghé thăm!',
	},
	{
		avatar: 'https://i.pinimg.com/564x/6d/63/e0/6d63e0aba7529d07dac5fbe5a6f37613.jpg',
		name: 'Roderick Schumm',
		starNumber: 5,
		ratingContent:
			'Trải nghiệm thú vị! Các loại rau củ được trồng tự nhiên, hương vị rất tươi ngon. Sẽ quay lại lần sau.',
	},
	{
		avatar: 'https://i.pinimg.com/564x/ca/81/08/ca810811f3e85220193f9afdbeb3f7a9.jpg',
		name: 'Brandi Boyle',
		starNumber: 5,
		ratingContent:
			'Mình rất thích không gian ở trang trại, thoáng đãng và yên bình. Sản phẩm thì tuyệt vời, giá cả lại hợp lý!',
	},
	{
		avatar: 'https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg',
		name: 'Scott Runolfsdottir',
		starNumber: 5,
		ratingContent:
			'Trang trại được tổ chức rất chuyên nghiệp. Các sản phẩm như sữa, rau củ đều rất tươi và ngon. Sẽ giới thiệu cho bạn bè!',
	},
	{
		avatar: 'https://i.pinimg.com/564x/64/32/16/6432169e11146bfecba528cdfdc02b57.jpg',
		name: 'Claire Witting',
		starNumber: 5,
		ratingContent:
			'Một nơi lý tưởng để mua thực phẩm sạch. Rất yên tâm về chất lượng sản phẩm. Nhân viên hỗ trợ nhiệt tình, mình rất hài lòng!',
	},
];

const diaries = [
	{
		image: 'https://www.fao.org.vn/wp-content/uploads/2020/11/ky-thuat-trong-bap-cai-tai-nha.jpg',
		name: 'Nhật ký trồng cây cải theo chuẩn VietGAP',
		description:
			'Hướng dẫn chi tiết kỹ thuật trồng cây cải theo chuẩn VietGAP, đảm bảo chất lượng và an toàn cho sức khỏe người tiêu dùng.',
	},
	{
		image: 'https://s3-eu-west-1.amazonaws.com/yara-links/h0q6.jpg',
		name: 'Nhật ký trồng dâu tây theo chuẩn VietGAP',
		description:
			'Các phương pháp trồng dâu tây chuẩn VietGAP, đảm bảo hương vị thơm ngon, tươi sạch và an toàn cho sức khỏe.',
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAtZ3nCPLz5uGYcZViXrgr3y6ihiJ_OUesA&s',
		name: 'Nhật ký trồng dưa hấu theo chuẩn VietGAP',
		description:
			'Kỹ thuật trồng dưa hấu theo tiêu chuẩn VietGAP, giúp sản phẩm đạt chất lượng tối ưu, an toàn và tự nhiên nhất.',
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
								width={200}
								height={200}
							></img>
							<p className={styles.serviceTitle}>{procedure.title}</p>
							{/* <Button type="primary" className={styles.procedureBtn}>
								Đọc thêm
							</Button> */}
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
						<span>Điền các thông tin yêu cầu </span>
						<span>để đặt lịch xem đất</span>
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
