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
		loading: false
	}),
	actions: {
		async fetchData() {
			this.loading = true;
			this.fullData = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
				.then(result => {
					this.fullData = result.data['values'].filter((el) => el[1].trim().length > 0)
					this.loading = false;
				})
				.catch(err => {
					console.error(err)
					this.loading = false;
					return [];
				})
		},

	}
})

