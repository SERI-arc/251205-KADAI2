import { defineStore } from "pinia";
import axios from "axios";

export const useNationStore = defineStore("naiton", {
  state: () => ({
    country: [""],
    countryList: [],
    num: 0,
    countries: "",
    flag: "",
    nation: null,
    capitalList: [],
    capitalLists: "",
    population: "",
    lat: "",
    lng: "",
    marker: "",
    region: "japaneast",
    endpoint: "https://api.cognitive.microsofttranslator.com/",
    favoriteNation: [],
    favoriteNations: "",
  }),

  getters: {
    count(state) {
      return state.favoriteNations.length;
    },
  },

  actions: {
    async getCountry() {
      while (this.num < 195) {
        const res1 = await axios.get(
          "https://restcountries.com/v3.1/independent?status=true&fields=name"
        );
        this.country = res1.data[`${this.num}`].name.common;
        this.countryList.push(this.country);
        this.num++;
      }
      this.countryList.sort();
    },
    async translate(text) {
      try {
        const response = await axios.post(
          `${this.endpoint}translate?api-version=3.0&from=en&to=ja`,
          [{ Text: text }],
          {
            headers: {
              "Ocp-Apim-Subscription-Key": this.apiKey,
              "Ocp-Apim-Subscription-Region": this.region,
              "Content-Type": "application/json",
            },
          }
        );
        this.capitalLists = response.data[0].translations[0].text;
        return this.capitalLists;
      } catch (error) {
        console.error("Translation API Error:", error);
      }
    },
    async searchCountry() {
      const res1 = await axios.get(
        `https://restcountries.com/v3.1/name/${this.countries}`
      );
      this.nation = res1.data[0].translations.jpn.official;
      this.capitalList = res1.data[0].capital;
      this.population = res1.data[0].population;
      this.population = this.population.toLocaleString();
      this.flag = res1.data[0].flags.png;
      this.lat = res1.data[0].latlng[0];
      this.lng = res1.data[0].latlng[1];
      console.log(this.capitalList);
      this.capitalLists = await this.translate(this.capitalList[0]);
    },

    register() {
      if (this.nation !== null) {
        this.favoriteNation.push(this.nation);
        this.favoriteNation.push(this.flag);
        console.log(this.favoriteNation);
        this.favoriteNations = this.favoriteNation.reduce(
          (accumulator, currentValue, index, array) => {
            if (index % 2 === 0) {
              accumulator.push({ name: currentValue, flag: array[index + 1] });
            }
            return accumulator;
          },
          []
        );
        console.log(this.favoriteNations);
      } else {
        //何もしない
      }
    },
  },
});
