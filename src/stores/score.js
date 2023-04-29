import {defineStore} from 'pinia'

import axios from 'axios';

export const useScoreStore = defineStore({
	id: 'store',
	state: () => ({
		sheetId: '1xZ_wiNc53amjXl7yxvkMcmE5EChQxTgmU43jo5TeAqs',
		apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
		sheet: 'TOP',
		range: 'A2:D200',
		fullData: [],
		loading: false,
		notice: 'Tulge kõik sõõma'
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

