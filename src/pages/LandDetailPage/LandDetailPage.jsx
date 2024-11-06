import React, {useEffect, useState} from 'react';
import styles from './LandDetailPage.module.css';
import {Button, Carousel} from 'antd';
import {LabelPage} from '../../components/LabelPage/LabelPage';
import ServicePackages from './ServicePackages/ServicePackages';
import {useNavigate, useParams} from 'react-router-dom';
import {getLandByID} from '../../services/api';
import {toast} from 'react-toastify';
import {convertImageURL, formatNumber} from '../../utils';

export const LandDetailPage = () => {
	let navigate = useNavigate();
	const {id} = useParams();
	const [landDetail, setLandetail] = useState({
		id: '',
		created_at: '',
		updated_at: '',
		name: '',
		title: '',
		description: '',
		acreage_land: '',
		staff_id: null,
		price_booking_per_month: '',
		status: '',
		sub_description: [
			{
				id: '',
				sub_title: '',
				sub_description: '',
			},
		],
		url: [
			{
				id: '',
				string_url: '',
				type: '',
			},
			{
				id: '',
				string_url: '',
				type: '',
			},
		],
		staff: null,
	});

	useEffect(() => {
		getLandByID(id)
			.then((response) => {
				if (response.statusCode === 200) {
					setLandetail(response.metadata);
				}

				console.log('Fetched lands successfully:', response.metadata);
				// Handle the successful response here, such as updating state or processing the data
			})
			.catch((error) => {
				if (error.response) {
					console.error('Error fetching lands:', error.response.data);
				} else {
					console.error('Error:', error.message);
				}
			});
	}, [id]);

	if (!landDetail) {
		setLandetail({
			id: '',
			created_at: '',
			updated_at: '',
			name: '',
			title: '',
			description: '',
			acreage_land: '',
			staff_id: null,
			price_booking_per_month: '',
			status: '',
			sub_description: [
				{
					id: '',
					sub_title: '',
					sub_description: '',
				},
			],
			url: [
				{
					id: '',
					string_url: '',
					type: '',
				},
				{
					id: '',
					string_url: '',
					type: '',
				},
			],
			staff: null,
		});
		toast.error('Lỗi hệ thống');
		return;
	}

	return (
		<div style={{paddingBottom: 50}}>
			<LabelPage title={'Chi Tiết Mảnh Đất'} />
			<div style={{padding: '0 60px'}}>
				<Carousel style={{borderRadius: 10, overflow: 'hidden', marginBottom: 30}} autoplay>
					{landDetail &&
						landDetail.url.map((url, index) => (
							<div key={index}>
								{url.type === 'image' ? (
									<h3
										style={{
											height: '300px',
											color: '#fff',
											textAlign: 'center',
											background: '#364d79',
										}}
									>
										<img
											src={convertImageURL(url.string_url)}
											alt={url.string_url}
											style={{
												width: '100%',
												height: '300px',
												objectFit: 'cover',
											}}
										/>
									</h3>
								) : (
									<video width="100%" height="300" controls>
										<source
											src="https://api.agrifarm.site/uploadFile/agriFarm.mp4"
											// src={convertImageURL(url.string_url)}
											type="video/mp4"
											autoplay
										/>
										Your browser does not support the video tag.
									</video>
								)}
							</div>
						))}
				</Carousel>

				<div style={{display: 'flex'}}>
					<div style={{width: '75%'}}>
						<h3 style={{fontSize: '28px', marginBottom: 20}}>{landDetail.title}</h3>
						<div
							dangerouslySetInnerHTML={{__html: landDetail.description}}
							style={{width: '80%'}}
						/>
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
								{landDetail.name}
							</p>
							<span style={{color: '#878680', fontWeight: 600, fontSize: 14}}>
								Giá thuê:
							</span>
							<p style={{fontWeight: 800, fontSize: 16, marginBottom: 26}}>
								{formatNumber(landDetail.price_booking_per_month)}/ Tháng
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
