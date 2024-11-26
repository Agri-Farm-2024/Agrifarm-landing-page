import React, {useEffect} from 'react';
import {Card, Button} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
import {getLandByID} from '../../../services/api';
import {capitalizeFirstLetter, convertImageURL} from '../../../utils';

const {Meta} = Card;

const LandItem = ({id, title, description, image}) => {
	let navigate = useNavigate();

	const imageFirst = image.find((item) => item.type === 'image')?.string_url;

	const convertImage = convertImageURL(imageFirst);

	return (
		<Card
			hoverable
			cover={
				<img
					alt={title}
					src={convertImage}
					style={{width: '100%', height: 260, objectFit: 'cover'}}
				/>
			}
			style={{width: '100%'}}
		>
			<Meta
				title={capitalizeFirstLetter(title)}
				description={description}
				style={{textAlign: 'left'}}
			/>
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
