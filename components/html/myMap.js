import searchCity from "../api/openweathermap/openweathermap";
import { map } from "../api/mapbox/mapbox";

export default {
    name: 'map',
    template: `<section><div id="mapid"></div></section>`,
    methods: {
        searchCity: function(data) {
            searchCity(data).then((result) => {
                const {
                    coord: {
                        lon,
                        lat
                    } 
                } = result;
                map.setView([lat, lon], 10);
            });            
        }
    }
}