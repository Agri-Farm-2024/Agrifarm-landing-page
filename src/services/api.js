import axios from 'axios';
// const API_HOST = 'http://localhost:3333';
export const API_HOST = 'https://api.agrifarm.site';

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

export const getLandsByStatus = async ({status, page_size, page_index}) => {
	console.log('getLandsByStatus: ', status, page_size, page_index);

	const End_point =
		status === 'all'
			? `${API_HOST}/lands?page_size=${page_size}&page_index=${page_index}`
			: `${API_HOST}/lands?status=${status}&page_size=${page_size}&page_index=${page_index}`;
	try {
		const response = await axios.get(End_point);

		console.log('Fetched lands successfully:', response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error('Error fetching lands:', error.response.data);
			throw new Error(error.response.data.message || 'Failed to fetch lands');
		} else {
			console.error('Error:', error.message);
			throw new Error('An error occurred while fetching lands');
		}
	}
};

export const getLandByID = async (ID) => {
	try {
		const response = await axios.get(`${API_HOST}/lands/${ID}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		console.log('Fetched land successfully:', response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error('Error fetching land:', error.response.data);
			throw new Error(error.response.data.message || 'Failed to fetch lands');
		} else {
			console.error('Error:', error.message);
			throw new Error('An error occurred while fetching lands');
		}
	}
};
