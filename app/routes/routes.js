import axios from 'axios';
import {ERROR_CODE_NETWORK, ERROR_CODE_TIMEOUT, TIMEOUT} from "../config/config";
import {API_ENDPOINTS, BASE_HS_PARAMS} from "../config/api";
import _ from 'underscore';
process.nextTick = setImmediate;
const axiosInstance = axios.create();
axiosInstance.defaults.timeout = TIMEOUT;
axiosInstance.interceptors.response.use((response) => {
	return response;
}, function (error) {
	// Timeout
	if (error.code === ERROR_CODE_TIMEOUT) {
		alert('Timeout Server');
	}
	// Nessuna Connessione
	if (error.message === ERROR_CODE_NETWORK) {
		alert("Nessuna Connessione");
	}
	return Promise.reject(error);
});

export class Routes {
	static getCards = function () {
		let url = API_ENDPOINTS.GET_CARDS;
		return axiosInstance.get(url, BASE_HS_PARAMS).then(res => {
			let cards = [];
			_.each(res.data, (set) => {
				_.each(set, (card) => {
					cards.push(card);
				})
			});
			cards = _.sortBy(cards, 'name');
			return cards;
		}).catch(function (error) {
			console.log(error);
		})
	}
}