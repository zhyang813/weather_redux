const API_KEY = '1e400d4668ba1b6a55aa001a54cdd907';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	return {
		type: FETCH_WEATHER
	};
}