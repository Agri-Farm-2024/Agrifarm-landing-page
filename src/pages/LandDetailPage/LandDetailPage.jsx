import React from 'react';
import styles from './LandDetailPage.module.css';
import {Button, Carousel} from 'antd';
import {LabelPage} from '../../components/LabelPage/LabelPage';
import ServicePackages from './ServicePackages/ServicePackages';
import {useNavigate} from 'react-router-dom';

export const LandDetailPage = () => {
	let navigate = useNavigate();
	return (
		<div style={{paddingBottom: 50}}>
			<LabelPage title={'Chi Tiết Mảnh Đất'} />
			<div style={{padding: '0 60px'}}>
				<Carousel style={{borderRadius: 10, overflow: 'hidden', marginBottom: 30}} autoplay>
					<div>
						<h3
							style={{
								height: '300px',
								color: '#fff',
								textAlign: 'center',
								background: '#364d79',
							}}
						>
							<img
								src="https://s3-alpha-sig.figma.com/img/5bde/d092/84c4c9e689844611e50ebc9915cae36b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQalUlAokNFRuvJd3b5sZIuvwhTLru5rUrNStbuV6AurV8xAm~g77ub6LVWrmHk7k6-wnoXTp6apPtyaIrTNqMa1M8qYWJLhjuJQQKLhOmzYFBcRyw3wP~UxFgNIDxtm6sfm5vM9EaNm9WFrJpo7nhXUaM7yBUy4c4RmppV8THyN1jf~xaBpfAsKdH8nCqbnJSjQXRdJjwpuUK3SgU5VcnG-cvABcxuUemYNeNTnXEnoHZWs7IpfHeUwWi4qDfxxLPU-8oHAei1ie5-QSaeIJrlSnglEe9-Oukcgz9T6Yj3-dDhCOEHWlUruYNzHjvc370KWmVEjJes-ae4-z8C6Zg__"
								alt="Nature 1"
								style={{width: '100%', height: '300px', objectFit: 'cover'}}
							/>
						</h3>
					</div>
					<div>
						<h3
							style={{
								height: '300px',
								color: '#fff',
								textAlign: 'center',
								background: '#364d79',
							}}
						>
							<img
								src="https://s3-alpha-sig.figma.com/img/5bde/d092/84c4c9e689844611e50ebc9915cae36b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQalUlAokNFRuvJd3b5sZIuvwhTLru5rUrNStbuV6AurV8xAm~g77ub6LVWrmHk7k6-wnoXTp6apPtyaIrTNqMa1M8qYWJLhjuJQQKLhOmzYFBcRyw3wP~UxFgNIDxtm6sfm5vM9EaNm9WFrJpo7nhXUaM7yBUy4c4RmppV8THyN1jf~xaBpfAsKdH8nCqbnJSjQXRdJjwpuUK3SgU5VcnG-cvABcxuUemYNeNTnXEnoHZWs7IpfHeUwWi4qDfxxLPU-8oHAei1ie5-QSaeIJrlSnglEe9-Oukcgz9T6Yj3-dDhCOEHWlUruYNzHjvc370KWmVEjJes-ae4-z8C6Zg__"
								alt="Nature 2"
								style={{width: '100%', height: '300px', objectFit: 'cover'}}
							/>
						</h3>
					</div>
					<div>
						<h3
							style={{
								height: '300px',
								color: '#fff',
								textAlign: 'center',
								background: '#364d79',
							}}
						>
							<img
								src="https://s3-alpha-sig.figma.com/img/5bde/d092/84c4c9e689844611e50ebc9915cae36b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQalUlAokNFRuvJd3b5sZIuvwhTLru5rUrNStbuV6AurV8xAm~g77ub6LVWrmHk7k6-wnoXTp6apPtyaIrTNqMa1M8qYWJLhjuJQQKLhOmzYFBcRyw3wP~UxFgNIDxtm6sfm5vM9EaNm9WFrJpo7nhXUaM7yBUy4c4RmppV8THyN1jf~xaBpfAsKdH8nCqbnJSjQXRdJjwpuUK3SgU5VcnG-cvABcxuUemYNeNTnXEnoHZWs7IpfHeUwWi4qDfxxLPU-8oHAei1ie5-QSaeIJrlSnglEe9-Oukcgz9T6Yj3-dDhCOEHWlUruYNzHjvc370KWmVEjJes-ae4-z8C6Zg__"
								alt="Nature 3"
								style={{width: '100%', height: '300px', objectFit: 'cover'}}
							/>
						</h3>
					</div>
					<div>
						<h3
							style={{
								height: '300px',
								color: '#fff',
								textAlign: 'center',
								background: '#364d79',
							}}
						>
							<img
								src="https://s3-alpha-sig.figma.com/img/5bde/d092/84c4c9e689844611e50ebc9915cae36b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQalUlAokNFRuvJd3b5sZIuvwhTLru5rUrNStbuV6AurV8xAm~g77ub6LVWrmHk7k6-wnoXTp6apPtyaIrTNqMa1M8qYWJLhjuJQQKLhOmzYFBcRyw3wP~UxFgNIDxtm6sfm5vM9EaNm9WFrJpo7nhXUaM7yBUy4c4RmppV8THyN1jf~xaBpfAsKdH8nCqbnJSjQXRdJjwpuUK3SgU5VcnG-cvABcxuUemYNeNTnXEnoHZWs7IpfHeUwWi4qDfxxLPU-8oHAei1ie5-QSaeIJrlSnglEe9-Oukcgz9T6Yj3-dDhCOEHWlUruYNzHjvc370KWmVEjJes-ae4-z8C6Zg__"
								alt="Nature 4"
								style={{width: '100%', height: '300px', objectFit: 'cover'}}
							/>
						</h3>
					</div>
				</Carousel>
				<div style={{display: 'flex'}}>
					<div style={{width: '75%'}}>
						<h3 style={{fontSize: '28px', margin: 0}}>
							Mảnh đất nông nghiệp tại AgriFarm
						</h3>
						<p style={{fontSize: '16px', marginBottom: 30}}>
							Chào mừng bạn đến với AgriFarm - nơi mà bạn có thể thỏa sức khám phá
							niềm đam mê làm vườn và tận hưởng không gian xanh mát. Chúng tôi đang
							tìm kiếm những người bạn đồng hành để cùng nhau chăm sóc và phát triển
							mảnh đất này.
						</p>
						<p style={{fontSize: '16px', fontWeight: 'bold'}}>Vị trí và diện tích</p>
						<p style={{fontSize: '16px', marginBottom: 20}}>
							Mảnh đất số 1 nằm ở khu vực trung tâm của trang trại AgriFarm, với diện
							tích 500 mét vuông. Vị trí này rất thuận lợi, chỉ cách nhà kho và nguồn
							nước chính của trang trại khoảng 100 mét, giúp bạn dễ dàng tiếp cận và
							quản lý các hoạt động canh tác.
						</p>
						<p style={{fontSize: '16px', fontWeight: 'bold'}}>Điều kiện đất đai</p>
						<p style={{fontSize: '16px', marginBottom: 20}}>
							Mảnh đất số 1 có lớp đất phù sa màu mỡ, giàu dinh dưỡng, rất phù hợp để
							trồng các loại rau xanh và cây ăn quả như cà chua, xà lách, và dưa leo.
							Đất đã được cải tạo kỹ lưỡng, đảm bảo độ tơi xốp và khả năng thoát nước
							tốt, giúp cây trồng phát triển nhanh chóng và khỏe mạnh.
						</p>
						<p style={{fontSize: '16px', fontWeight: 'bold'}}>Các dịch vụ hỗ trợ</p>
						<p style={{fontSize: '16px', marginBottom: 20}}>
							Khi thuê mảnh đất số 1 đồng thời sử dụng dịch vụ chăm sóc của AgriFarm,
							bạn sẽ được hưởng lợi từ các dịch vụ hỗ trợ chuyên nghiệp của AgriFarm,
							bao gồm tư vấn kỹ thuật trồng trọt, cung cấp phân bón hữu cơ và hỗ trợ
							kiểm soát sâu bệnh từ đội ngũ chuyên gia nông nghiệp của chúng tôi.
							Chúng tôi luôn sẵn sàng hỗ trợ bạn để đảm bảo mùa vụ đạt năng suất cao
							nhất.
						</p>
						<ServicePackages />
					</div>
					<div style={{flex: 1, padding: '0 20px'}}>
						<div
							style={{
								background: '#7FB640',
								height: 10,
								borderRadius: '8px 8px 0 0',
								marginBottom: -5,
							}}
						></div>
						<div
							style={{
								height: 300,
								padding: '20px',
								boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow here
								borderRadius: '8px', // Optional: for smooth corners
								backgroundColor: 'white', // Optional: for contrast against the shadow
								marginBottom: 50,
							}}
						>
							<span style={{color: '#878680', fontWeight: 600, fontSize: 14}}>
								Mảnh Đất{' '}
							</span>
							<p style={{fontWeight: 800, fontSize: 16, marginBottom: 26}}>
								Mảnh đất số 1
							</p>
							<span style={{color: '#878680', fontWeight: 600, fontSize: 14}}>
								Giá thuê:
							</span>
							<p style={{fontWeight: 800, fontSize: 16, marginBottom: 26}}>
								10.000.000/ năm
							</p>
							<span style={{color: '#878680', fontWeight: 600, fontSize: 14}}>
								Thời hạn tối thiểu :
							</span>
							<p style={{fontWeight: 800, fontSize: 16, marginBottom: 26}}>6 tháng</p>
							<span style={{color: '#878680', fontWeight: 600, fontSize: 14}}>
								Giấy tờ, pháp lý
							</span>
							<p style={{fontWeight: 800, fontSize: 16, marginBottom: 26}}>Liên hệ</p>
						</div>

						<div
							style={{
								background: '#7FB640',
								padding: '40px 40px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								borderRadius: 8,
							}}
						>
							<div
								style={{
									marginBottom: 20,
									fontSize: 24,
									fontWeight: 800,
									color: 'white',
									textAlign: 'center',
								}}
							>
								Nếu bạn quan tâm mô hình của chúng tôi
							</div>
							<Button
								style={{padding: '30px 60px'}}
								type="primary"
								danger
								size="large"
								onClick={() => navigate('/land-lease')}
							>
								Liên Hệ Ngay
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
