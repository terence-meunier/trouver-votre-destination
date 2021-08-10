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
    components: [Header, InputField, Suggestion, myMap, Weather],
    mount: function(id) {
        this.components.forEach((component) => {
            $(id).append(component.template);
        });
    },
    created: function() {
        this.cityField.registerObserver(data => Suggestion.methods.searchForSuggestion(data));
        this.cityField.registerObserver(data => myMap.methods.searchCity(data));
        this.cityField.registerObserver(data => Weather.methods.searchCity(data));
        this.mount('#app');
        app.cityField.listener('input-search', 'change');
    }
}

app.created();

export default app;