import axios from 'axios';

export default class Search {
    constructor(query = "") {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://test.edamam.com/search?q=${this.query}`);
            this.result = res.data.hits.map(item => item.recipe);
            console.log(this.result);
        } catch (e) {
            console.log("error");
        }

    }
}

