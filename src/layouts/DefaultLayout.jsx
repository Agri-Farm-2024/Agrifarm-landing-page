import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {DashboardOutlined, UserOutlined} from '@ant-design/icons';
// import { imageExporter } from "../assets/images";
import {Header} from '../components/Header/Header';
import CustomFooter from '../components/Footer/Footer';
const {Sider, Content} = Layout;

// const getItem = (label, key, icon) => ({ key, icon, label });

export const DefaultLayout = ({children}) => {
	const navigate = useNavigate();
	//   const [collapsed, setCollapsed] = useState(false);
	//   const location = useLocation();
	//   const [selectMenu, setSelectMenu] = useState(location.pathname);

	//   const pageLocation = [
	//     "/dashboard",
	//     //add page loction here to detect selected page
	//   ];

	//   const items = [
	//     getItem("Dashboard", "/dashboard", <DashboardOutlined />),
	//     //add menu items here
	//   ];

	//   const handleClickMenuItem = (e) => {
	//     setSelectMenu(e.key);
	//     navigate(e.key);
	//   };

	//   const toggleCollapsed = () => {
	//     setCollapsed(!collapsed);
	//   };

	//   const showHeaderFooter = !isLoginPage;

	return (
		<div style={{overflow: 'hidden'}}>
			<Header />
			<div
				style={{
					minHeight: '100vh',
					width: '100%',
				}}
			>
				{children}
			</div>
			<CustomFooter />
		</div>
	);
};
