import searchForSuggestion from "../api/citysuggestion/citysuggestion";

export default {
    name: 'suggestion',
    template: `<section id="suggestions" class="flex flex-row h-16 items-center justify-center mb-5"></section>`,
    methods: {
        searchForSuggestion: (data) => {
            searchForSuggestion(data);
        }
    }
}