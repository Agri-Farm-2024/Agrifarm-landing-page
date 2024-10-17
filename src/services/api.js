import axios from 'axios';
const API_HOST = 'http://localhost:3333';

export const sendOtp = async (email) => {
	try {
		const response = await axios.post(
			`${API_HOST}/auths/sendOTP?type=register`,
			{email},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		console.log('OTP sent successfully:', response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error('Error sending OTP:', error.response.data);
			throw new Error(error.response.data.message || 'Failed to send OTP');
		} else {
			console.error('Error:', error.message);
			throw new Error('An error occurred while sending OTP');
		}
	}
};

export const verifyOtp = async (email, otp) => {
	try {
		const response = await axios.post(
			`${API_HOST}/auths/verifyOTP?type=register`,
			{email, otp},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		console.log('OTP verified successfully:', response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error('Error verifying OTP:', error.response.data);
			throw new Error(error.response.data.message || 'Failed to verify OTP');
		} else {
			console.error('Error:', error.message);
			throw new Error('An error occurred while verifying OTP');
		}
	}
};

export const registerUser = async (userDetails) => {
	try {
		const response = await axios.post(`${API_HOST}/auths/register`, userDetails, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		console.log('User registered successfully:', response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error('Error registering user:', error.response.data);
			throw new Error(error.response.data.message || 'Failed to register user');
		} else {
			console.error('Error:', error.message);
			throw new Error('An error occurred while registering user');
		}
	}
};

export const createRequestViewLand = async (dataForm) => {
	try {
		const response = await axios.post(`${API_HOST}/requests/createRequestViewLand`, dataForm, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		console.log('createRequestViewLand successfully:', response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error('Error createRequestViewLand:', error.response.data);
			throw new Error(error.response.data.message || 'Failed createRequestViewLand');
		} else {
			console.error('Error:', error.message);
			throw new Error('An error occurred while createRequestViewLands');
		}
	}
};
