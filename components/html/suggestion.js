// Module API pour les suggestions
import App from "../../script";
import searchForSuggestion from "../api/citysuggestion/citysuggestion";

export default {
    name: 'suggestion',
    template: `<section id="suggestions" class="flex flex-row h-16 items-center justify-center mb-5"></section>`,
    methods: {
        searchForSuggestion: (data) => {
            function generateSuggestion(data) {
                const {
                    nom,
                    code,
                    departement: {
                        code: codeDepartement,
                        nom: nomDepartement
                    }
                } = data;
    
                const card = document.createElement('div');
                const ville = document.createElement('span');
                const departement = document.createElement('span');
                ville.innerHTML = `${nom} (${code})`;
                departement.innerHTML = `${nomDepartement || '??'} (${codeDepartement || '??'})`;
                card.setAttribute('class', 'flex flex-col min-w-1/6 h-16 px-2 items-center justify-center cursor-pointer');
                departement.setAttribute('class', 'text-gray-400 text-sm')
                card.appendChild(ville);
                card.appendChild(departement);
                card.addEventListener('click', () => {
                    $('#input-search').val(nom);
                    App.cityField.update(nom);
                });
    
                const section = document.querySelector('#suggestions');
                section.appendChild(card);
            }

            searchForSuggestion(data).then((result) => {
                const section = document.querySelector('#suggestions');
                section.innerHTML = '';
                result.forEach(o => generateSuggestion(o));                
            });                        
        }
    }
}