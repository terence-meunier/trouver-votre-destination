// Importation des composants html
import Header from "./components/html/header";
import InputField from "./components/html/inputText";
import Suggestion from "./components/html/suggestion";
import myMap from "./components/html/myMap";
import Weather from "./components/html/weather";

// Importation de la classe Observable 
import Observable from "./core/classes/observable";

// Objet principal app
const app = {
    name: 'app',
    cityField: new Observable(),
    observers: [
        Suggestion.methods.searchForSuggestion,
        myMap.methods.searchCity,
        Weather.methods.searchCity,
    ],
    components: [Header, InputField, Suggestion, myMap, Weather],
    mount: function(id) {
        this.components.forEach((component) => {
            $(id).append(component.template);
        });
    },
    created: function() {
        // On enregistre les observers sur l'observable
        this.observers.forEach((observer) => {
            this.cityField.registerObserver(data => observer(data));
        });

        // On monte les composants dans le DOM
        this.mount('#app');

        // On ajoute l'event sur le champ input search
        app.cityField.listener('input-search', 'change');
    }
}

// Initialisation de l'app
app.created();

export default app;