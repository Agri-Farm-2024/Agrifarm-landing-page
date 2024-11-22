import {Button, Form, Input, Checkbox, Modal} from 'antd';
import React, {useState} from 'react';
import styles from './LandLeaseForm.module.css';
import {toast} from 'react-toastify';
import {registerUser, sendOtp, verifyOtp} from '../../services/api';

export const LandLeaseForm = () => {
	// Form instance for managing form fields
	const [form] = Form.useForm();
	// State for managing the loading status and OTP modal visibility
	const [loading, setLoading] = useState(false);
	const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);
	const [otp, setOtp] = useState('');
	const [values, setValues] = useState('');

	// Form submission handler
	const handleSubmitForm = () => {
		console.log('Form Submitted: ', values);
		const userDetails = {
			email: values.email,
			full_name: values.name,
			avatar_url: 'http://example.com/avatar.jpg',
			dob: '1990-01-01',
			role: 4,
		};
		registerUser(userDetails)
			.then((data) => {
				console.log('registerUser: ' + data);
				toast.success('Đăng ký thành công, kiểm tra email !!!');
				form.resetFields(); // Clear the form fields after successful registration
			})
			.catch((error) => {
				toast.error('Lỗi thông tin');
			});
	};

	// OTP submission handler
	const handleOtpSubmit = () => {
		console.log(otp);
		console.log(values.email);
		verifyOtp(values.email, Number(otp))
			.then((data) => {
				setIsOtpModalVisible(false);
				console.log('OTP entered:', top);
				setOtp('');
				handleSubmitForm();
			})
			.catch((error) => {
				toast.error('OTP không hợp lệ, vui lòng kiểm tra !');
			});
	};

	const handleCallSendOTP = (values) => {
		setLoading(true);

		sendOtp(values.email)
			.then((data) => {
				setLoading(false);
				console.log('OTP sent successfully:', data);
				setIsOtpModalVisible(true);
			})
			.catch((error) => {
				setLoading(false);
				console.error('Error sending OTP:', error.message);
				toast.error('Email này đã được sử dụng !');
			});
	};

	return (
		<>
			<Form
				form={form}
				name="landLeaseForm"
				labelCol={{span: 24}}
				wrapperCol={{span: 22}}
				layout="vertical"
				className={styles.landLeaseForm}
				onFinish={(values) => {
					setValues(values);
					handleCallSendOTP(values);
				}}
				autoComplete="off"
			>
				<Form.Item
					className={styles.formItem}
					style={{width: '100%'}}
					label="Họ và tên"
					name="name"
					rules={[
						{
							required: true,
							message: 'Vui lòng không bỏ trống!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					className={styles.formItem}
					style={{width: '100%'}}
					label="Số điện thoại"
					name="phone"
					rules={[
						{
							required: true,
							message: 'Vui lòng không bỏ trống!',
						},
						{
							pattern: /^[0-9]{9,11}$/,
							message: 'Vui lòng nhập số điện thoại hợp lệ!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					className={styles.formItem}
					style={{width: '100%'}}
					label="Địa chỉ"
					name="address"
					rules={[
						{
							required: true,
							message: 'Vui lòng không bỏ trống!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					className={styles.formItem}
					style={{width: '100%'}}
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: 'Vui lòng không bỏ trống!',
						},
						{
							type: 'email',
							message: 'Vui lòng nhập email hợp lệ!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					style={{width: '100%'}}
					name="confirmation"
					valuePropName="checked"
					rules={[
						{
							validator: (_, value) =>
								value
									? Promise.resolve()
									: Promise.reject('Vui lòng xác nhận thông tin!'),
						},
					]}
				>
					<Checkbox>Tôi xác nhận rằng các thông tin đã cung cấp là chính xác</Checkbox>
				</Form.Item>

				<Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
					{loading ? 'Đang đăng ký...' : 'Đăng ký'}
				</Button>
			</Form>

			<Modal
				title="Nhập mã OTP - Mã này đã gửi ở Email của bạn"
				visible={isOtpModalVisible}
				onOk={handleOtpSubmit}
				onCancel={() => {
					setIsOtpModalVisible(false);
					setOtp('');
				}}
				okText="Xác nhận"
				cancelText="Hủy"
				maskClosable={false}
			>
				<div
					style={{
						marginTop: 20,
						marginBottom: 20,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Input.OTP
						placeholder="Nhập mã OTP"
						value={otp}
						onChange={(value) => setOtp(value)}
						length={6}
					/>
				</div>
			</Modal>
		</>
	);
};
