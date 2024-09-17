import React, {useState} from 'react';
import styles from './Header.module.css';
import {imageExporter} from '../../assets/images';
import {Link, useLocation, useNavigate} from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectMenu, setSelectMenu] = useState(location.pathname);

	const pageLocation = [
		'/home',
		'/land',
		//add page loction here to detect selected page
	];

	return (
		<div className={styles.headerBar}>
			<div style={{width: '20%'}}>
				<Link to="/home">
					<img
						src={imageExporter.logo}
						alt="logo"
						style={{
							width: '100px',
							height: '100px',
							display: 'block',
							margin: '10px auto',
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					></img>
				</Link>
			</div>
			<div className={styles.navBar}>
				<Link to="/home">
					<p
						className={
							location.pathname == '/home' ? styles.activeMenuItem : styles.menuItem
						}
					>
						TRANG CHỦ
					</p>
				</Link>
				<Link to="/land">
					<p
						className={
							location.pathname == '/land' ? styles.activeMenuItem : styles.menuItem
						}
					>
						MẢNH ĐẤT
					</p>
				</Link>
				<Link to="/land-lease">
					<p
						className={
							location.pathname == '/land-lease'
								? styles.activeMenuItem
								: styles.menuItem
						}
					>
						THUÊ ĐẤT
					</p>
				</Link>
			</div>
		</div>
	);
};
