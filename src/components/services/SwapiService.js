import firebase from "./firebase/firebaseConf";

export default class SwapiService{
    _appBase = 'http://192.168.0.86:5000';

    async getResource(url){
        const res = await fetch(`${this._appBase}${url}`);

        if (!res.ok){
            throw  new Error(`Could not fetch ${this._appBase}${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
    async getImgURL(url, id){
        const storage = firebase.storage().ref();
        return await storage.child(`/${url}/${id}.jpg`)
            .getDownloadURL()
            .then((url)=>{
                return url;
            })
            .catch((err) => {
                console.log(`MY ERROR is:${err.code}`)
            });
    }


    async getAllPeople(){
        const res = await this.getResource("/people/");
        return res.results.map(this._transformPerson);
    }
    async getPerson(id){
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }


    async getAllPlanet(){
        const res = await this.getResource("/planets/");
        return res.results.map(this._transformPlanet);
    }
    async getPlanet(id){
        const planet =  await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }


    async getAllStarships(){
        const res = await this.getResource("/starships/");
        return res.results.map(this._transformStarship);
    }
    async getStarship(id){
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }


    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
     _transformPlanet = async (planet) => {
        const id = this._extractId(planet);
        return {
            id,
            img: await this.getImgURL("Planets", id),
            name: planet.name,
            population: planet.population,
            rPeriod: planet.rotation_period,
            diam: planet.diameter
        };
    };
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        };
    };
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        };
    };
}

