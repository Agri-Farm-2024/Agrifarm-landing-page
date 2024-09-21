import React from 'react';
import {imageExporter} from '../../assets/images';

export const LabelPage = ({title}) => {
	return (
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
			{title}
		</div>
	);
};
