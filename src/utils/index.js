import {API_HOST} from '../services/api';

export function formatDate(input) {
	const date = new Date(input);
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
	const day = String(date.getUTCDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

// const input = "2024-10-17T01:30:00.000Z";
// console.log(convertToTimeString(input)); // Output: 08:30:00
export function convertToTimeString(input, offsetHours = 7) {
	const date = new Date(input);

	// Convert the UTC time to the specified time zone by adding the offset
	date.setHours(date.getUTCHours() + offsetHours);

	// Format the time to HH:mm:ss
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	return `${hours}:${minutes}:${seconds}`;
}

export function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function convertImageURL(relativePath) {
	console.log(relativePath);
	const formattedPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
	return `${API_HOST}${formattedPath}`;
}

export function capitalizeFirstLetter(string) {
	if (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	return string;
}
