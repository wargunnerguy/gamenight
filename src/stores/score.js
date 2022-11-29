import {defineStore} from 'pinia'

import axios from 'axios';

export const useScoreStore = defineStore({
	id: 'store',
	state: () => ({
		sheetId: '1zhn9554WJTIe6iVKqYh5fENu8aagLxy5B4enSbI7ljE',
		apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
		sheet: 'TOP',
		range: 'A2:C',
		fullData: [],
		loading: false,
	}),
	actions: {
		async fetchData() {
			this.loading = true;
			const scoreList = [];
			await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
				.then(result => {
					result.data['values'].filter((el) => el[1].trim().length > 0).forEach(el => scoreList.push(el))
				})
				.catch(err => {
					console.error(err)
					this.fullData = [];
				})
				.finally(res => {
					this.fullData = scoreList
					this.loading = false
				})
		},

	}
})

