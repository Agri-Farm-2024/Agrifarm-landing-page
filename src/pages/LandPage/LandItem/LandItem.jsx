import React, {useEffect} from 'react';
import {Card, Button} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
import {getLandByID} from '../../../services/api';

const {Meta} = Card;

const LandItem = ({id, title, description, image}) => {
	let navigate = useNavigate();
	const firstImage =
		image[0] && image[0].type === 'image'
			? image[0].string_url
			: 'https://th.bing.com/th/id/OIP.zY924La7IC_Yuhwjl2_3wwHaHa?w=800&h=800&rs=1&pid=ImgDetMain';
	console.log(firstImage);

	return (
		<Card
			hoverable
			cover={<img alt={title} src={firstImage} style={{width: '100%', height: 260}} />}
			style={{width: '100%'}}
		>
			<Meta title={title} description={description} style={{textAlign: 'left'}} />
			<Button
				onClick={() => navigate(`/land-detail/${id}`)}
				type="primary"
				style={{marginTop: '30px', minWidth: '200px'}}
				size="large"
			>
				Chi tiết
			</Button>
		</Card>
	);
};

export default LandItem;
